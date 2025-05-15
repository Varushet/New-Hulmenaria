import { defineStore } from 'pinia'
import { loadSheetData, saveSheetData } from '@/utils/indexedDB'

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
    },
  }),

  actions: {
    updateField(section, field, value) {
      this.sheetData[section] = this.sheetData[section] || {}
      this.sheetData[section][field] = value
    },

    updateFieldDirect(field, value) {
      this.sheetData[field] = value
    },

    // // //Funciones//
    //Añade un punto a un atributo si hay puntos disponibles
    addPoint(attributeName) {
      if (this.sheetData.atrPoints >= 0.1) {
        this.sheetData.attributes[attributeName] = Number(
          (athis.sheetData.attributes[attributeName] + 0.1).toFixed(1),
        )
        this.sheetData.atrPoints = Number((this.sheetData.atrPoints.value - 0.1).toFixed(1))
      }
    },

    addDower(dowerName) {
      // convierte el mapa en un array claves,valor y busca la coincidencia del segundo elemento, por eso _,
      const attribute = Object.entries(this.dowerMapping).find(
        ([_, dowers]) =>
          //busca en dowers el argumento de la función inicial y así saca a qué atr pertenece esta dt (para cada una)
          dowers.includes(dowerName),
        //obtiene la clave de la dt dada
      )?.[0]

      if (attribute && this.dtPoints[attribute] > 0) {
        // Verifica que la suma de dotes no exceda el límite
        const currentSum = this.getDowerSum(attribute)
        const attributeValue = this.sheetData.attributes[attribute]
        //No permite agregar puntos si ya hay repartidos esa máxima cantidad de puntos
        if (currentSum < attributeValue * 3) {
          this.sheetData.dower[dowerName]++
          this.sheetData.dtPoints[attribute]--
        }
      }
    },

    getDowerSum(attribute) {
      const dowers = this.dowerMapping[attribute] || []
      return dowers.reduce((sum, dowerName) => sum + this.sheetData.dower[dowerName], 0)
    },

    watchAttributes() {
      //Object. keys es para el objeto attributes cada clave -> atr y que para clave se ejecute con el forEach
      Object.keys(this.sheetData.attributes).forEach((atr) => {
        watch(
          () => this.sheetData.attributes[atr],
          (newValue, oldValue) => {
            const newLvl = Math.floor(newValue)
            const oldLvl = Math.floor(oldValue || 0)

            if (newLvl > oldLvl && getDowerSum(atr) < newLvl * 3) {
              this.dtPoints[atr] += (newLvl - oldLvl) * 3
            }
          },
        )
      })
    },

    newWound(index) {
      // Verificamos si el campo de nombre no está vacío
      if (
        this.sheetData.wounds[index].name == '' &&
        this.sheetData.wounds.length > 1 &&
        index != this.sheetData.wounds.length - 1
      ) {
        this.sheetData.wounds.splice(index, 1)
      } else if (
        index === this.sheetData.wounds.length - 1 &&
        this.sheetData.wounds[index].name != ''
      ) {
        const newId = this.sheetData.wounds.length + 1
        this.sheetData.wounds.push({ id: newId, name: '', stadium: 0, grade: 0 })
      }
    },

    //Funcion para aumentar el grade de la herida
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
      this.sheetData.devInsert = inputValue
      this.sheetData.devotion += devInsert.value
      this.sheetData.devInsert = ''

      if (this.sheetData.devotion >= 100) {
        this.sheetData.dp++
        this.sheetData.devotion = this.sheetData.devotion - 100
      }
    },

    openStats() {
      this.sheetData.isExpanded = !this.sheetData.isExpanded
    },
    // // //Funciones//

    // // //IndexedDB//

    async loadSheetIndexedDB() {
      try {
        const data = await loadSheetData(1)
        if (data) {
          this.sheetData = data
          console.log('Datos del PJ cargados con éxito')
        }
      } catch (error) {
        console.error('Error al cargar los datos del PJ:', error)
      }
    },

    async saveSheetIndexedDB() {
      try {
        await saveSheetData(1, this.sheetData)
        console.log('Datos del PJ guardados con éxito')
      } catch (error) {
        console.error('Error al guardar los datos del PJ:', error)
      }
    },

    // // //IndexedDB//
  },
})
