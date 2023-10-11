<template>
	<div id="app">
        <v-app id="inspire">
            <div class="text-center">
            <v-bottom-sheet
                v-model="sheet"
                inset
            >
                <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="orange"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    SELECIONAR FILIAL
                </v-btn>
                </template>
                <v-sheet
                class="text-center"
                height="200px"
                >
                <v-btn
                    class="mt-6"
                    text
                    color="error"
                    @click="sheet = !sheet"
                >
                    close
                </v-btn>
                <div class="my-3">
                    <v-select
                        v-model="select"
                        :hint="`${select.numero}`"
                        :items="listData"
                        item-text="numero"
                        item-value="numero"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                    ></v-select>
                </div>
                </v-sheet>
            </v-bottom-sheet>
            </div>
        </v-app>
        </div>
</template>
  
<script>
export default {
	
	data() {
		return {
			sheet: false,
            list: null,
            select: { numero: 'Florida'},
		}
	},
	
	methods: {
        async takeData() {
          let headers = {
            codeEdit: this.buscarCodigo,
          };
          
          const response = await axios.get(
            `http://rodoparanaimplementos120532.protheus.cloudtotvs.com.br:4050/rest/reidoapsdu/consultar/fornecedores/`,
              {headers}
          );
            console.log("aquiiiii", response)
            this.listData = response.data
      	 },
	},created() {
      
      this.takeData()
    },
};
</script>
