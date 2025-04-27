<template>
    <section class="company-info">
        <div class="project-selector">
            <div v-for="(item, index) in items" :key="index"
                :class="['selector-item', { active: index === activeIndex }]" @click="selectItem(index)">
                <span>{{ item }}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectSelector',
    data() {
        return {
            activeIndex: 1,
            items: [
                '3. CÁMARA DE PREPARACIÓN DE AIRE',
                '4. HORNO DE PARED RADIANTE',
                '5. AMPLIACIÓN DE TINAS DE INMERSIÓN DE VEHÍCULOS, FOSFATO & E-COAT',
                '6. MIX ROOM',
                '7. HORNOS PARA PRODUCCIÓN EN BATCH',
                '8. HORNOS DE ESMALTE A Y B',
                '9. INSTALACIÓN DE CHIMENEAS DE CABINA DE BUMPERS',
                '10. SISTEMAS DE ENFRIAMIENTO DE BUMPERS Y CARROCERÍAS'
            ]
        };
    },
    methods: {
        selectItem(index) {
            this.activeIndex = index;
        }
    }
};
</script>


<style scoped>
.company-info {
    display: flex;
    align-items: center;
    height: 700px;
    position: relative;
    width: 100%;
    overflow: hidden;
}

.project-selector {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  height: 100%;
  width: 100%;
  padding: 0;
  color: #CECCCC91;
  
}


.selector-item {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  flex: 1 1 0%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: transparent;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  padding: 20px 5px;
  overflow: hidden;
  color: #333;
  background-color: #CECCCC91;
  padding-top: 3%;
}

.selector-item span {
  font-size: clamp(1rem, 4vw, 2rem);
  line-height: 1.2;
  text-align: start;
  align-self: center;
  font-weight: bold;
  max-height: 100%;
  white-space: normal;      /* permite saltos de línea */
  overflow-wrap: break-word;
}
.selector-item:hover {
    background-color: #00A5DD99;
    color: white;
}

</style>