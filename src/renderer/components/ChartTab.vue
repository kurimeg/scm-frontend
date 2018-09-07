<template>
  <div class="tab" 
      :class="{ 'tab--active': true }" 		
      :id="floor.FLOOR_PLACE_DV"
      @click="switchTab">
      {{ floor.FLOOR_PLACE_DV_NM }}		
  </div>	
</template>

<script>
  export default {
    props: ['floor']
  }
</script>

<style scoped>
.tab{
	flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
	font-size: 11.2px;
  cursor: pointer;
}
.tab--active {
  border-top: 3px solid #28a1f7;
}
</style>