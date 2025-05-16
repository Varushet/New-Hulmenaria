import { defineStore } from 'pinia'
import { watch } from 'vue'
import { loadSheetData, saveSheetData } from '@/utils/indexedDB'

const dowerMapping = {
  con: ['agil', 'end', 'strg', 'rap', 'ref', 'spd'],
  int: ['clev', 'conc', 'ing', 'wisd', 'tem', 'will'],
  per: ['emp', 'seek', 'dizz', 'sigh'],
  car: ['pret', 'man', 'sec', 'ac'],
  hab: ['art', 'des'],
}

export const useSheetDataStore = defineStore('sheetData', {
  state: () => ({
    sheetData: {
      atr: {
        level: 1,
        xpInsert: 0,
        xpReach: 0,
        atrPoints: 0.3,
        devInsert: 0,
        devotion: 0,
        attributes: {
          con: 0,
          int: 0,
          per: 0,
          car: 0,
          hab: 0,
          psi: 0,
          esp: 0,
        },
        dower: {
          agil: 0,
          end: 0,
          strg: 0,
          rap: 0,
          ref: 0,
          spd: 0,
          clev: 0,
          conc: 0,
          ing: 0,
          wisd: 0,
          tem: 0,
          will: 0,
          emp: 0,
          seek: 0,
          dizz: 0,
          sigh: 0,
          pret: 0,
          man: 0,
          sec: 0,
          ac: 0,
          art: 0,
          des: 0,
        },
        wounds: [{ id: 1, name: '', stadium: 0, grade: 1 }],
        deityName: '',
        dp: 0,
        isExpanded: false,
        luckSelect: '',
        luck: 0,
        capCon: 0,
        plusCon: 0,
        capInt: 0,
        plusInt: 0,
        capPer: 0,
        plusPer: 0,
        capCar: 0,
        plusCar: 0,
        capHab: 0,
        plusHab: 0,
        capPsi: 0,
        plusPsi: 0,
        capEsp: 0,
        plusEsp: 0,
        plusReg: 0,
        regSelect: '',
        karmaGood: 0,
        karmaEvil: 0,
      },
      dtPoints: {
        con: 0,
        int: 0,
        per: 0,
        car: 0,
        hab: 0,
      },
    },
  }),

  actions: {
    updateField(section, field, value) {
      if (this.sheetData[section]) {
        this.sheetData[section][field] = value
      }
    },

    addPoint(attributeName) {
      if (this.sheetData.atr.atrPoints >= 0.1) {
        this.sheetData.atr.attributes[attributeName] = Number(
          (this.sheetData.atr.attributes[attributeName] + 0.1).toFixed(1)
        )
        this.sheetData.atr.atrPoints = Number((this.sheetData.atr.atrPoints - 0.1).toFixed(1))
      }
    },

    addDower(dowerName) {
      const attribute = Object.entries(dowerMapping).find(([_, dowers]) =>
        dowers.includes(dowerName)
      )?.[0]

      if (attribute && this.sheetData.dtPoints[attribute] > 0) {
        const currentSum = this.getDowerSum(attribute)
        const attributeValue = this.sheetData.atr.attributes[attribute]
        
        if (currentSum < attributeValue * 3) {
          this.sheetData.atr.dower[dowerName]++
          this.sheetData.dtPoints[attribute]--
        }
      }
    },

    getDowerSum(attribute) {
      const dowers = dowerMapping[attribute] || []
      return dowers.reduce((sum, dowerName) => sum + this.sheetData.atr.dower[dowerName], 0)
    },

    watchAttributes() {
      Object.keys(this.sheetData.atr.attributes).forEach((atr) => {
        watch(
          () => this.sheetData.atr.attributes[atr],
          (newValue, oldValue) => {
            const newLvl = Math.floor(newValue)
            const oldLvl = Math.floor(oldValue || 0)

            if (newLvl > oldLvl && this.getDowerSum(atr) < newLvl * 3) {
              this.sheetData.dtPoints[atr] += (newLvl - oldLvl) * 3
            }
          }
        )
      })
    },

    newWound(index) {
      if (
        this.sheetData.atr.wounds[index].name === '' &&
        this.sheetData.atr.wounds.length > 1 &&
        index !== this.sheetData.atr.wounds.length - 1
      ) {
        this.sheetData.atr.wounds.splice(index, 1)
      } else if (
        index === this.sheetData.atr.wounds.length - 1 &&
        this.sheetData.atr.wounds[index].name !== ''
      ) {
        const newId = this.sheetData.atr.wounds.length + 1
        this.sheetData.atr.wounds.push({ id: newId, name: '', stadium: 0, grade: 0 })
      }
    },

    upGrade(wound) {
      wound.stadium++
      if (wound.stadium > 3) {
        wound.grade++
        wound.stadium = 1
      }
    },

    downGrade(wound) {
      if (wound.stadium > 0) {
        wound.stadium--
      }
      if (wound.stadium < 1 && wound.grade > 0) {
        wound.grade--
        wound.stadium = 3
      }
    },

    devUpdate(event) {
      const inputValue = Number(event.target.value) || 0
      this.sheetData.atr.devInsert = inputValue
      this.sheetData.atr.devotion += inputValue
      this.sheetData.atr.devInsert = ''

      if (this.sheetData.atr.devotion >= 100) {
        this.sheetData.atr.dp++
        this.sheetData.atr.devotion = this.sheetData.atr.devotion - 100
      }
    },

    openStats() {
      this.sheetData.atr.isExpanded = !this.sheetData.atr.isExpanded
    },

    async loadSheetIndexedDB() {
      try {
        const data = await loadSheetData(1)
        if (data) {
          this.sheetData = data
          console.log('Sheet data loaded successfully')
        }
      } catch (error) {
        console.error('Error loading sheet data:', error)
      }
    },

    async saveSheetIndexedDB() {
      try {
        await saveSheetData(1, this.sheetData)
        console.log('Sheet data saved successfully')
      } catch (error) {
        console.error('Error saving sheet data:', error)
      }
    },
  },
})