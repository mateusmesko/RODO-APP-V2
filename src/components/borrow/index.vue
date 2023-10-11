<template>
    <div>

      <v-text-field class="ma-5" type="text" v-model="buscarCodigo"></v-text-field>
      
      <v-btn @click="sendData">
        CRIAR
      </v-btn>
      
      <v-btn @click="takeData">
        BUSCAR
      </v-btn>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                NAME
              </th>

              <th class="text-left">
                FILIAL
              </th>
              <th class="text-left">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in listData"
              :key="index"
            >
              <td>{{ item.numero }}</td>
              <td>{{ item.filial }}</td>
              <td>ACTIONS</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    
    data: () => ({
      listData: null,
      buscarCodigo: ''
    }),
    methods: {
      async sendData() {
        try {
          const data = {
            "PEDIDO":[{
                "FILIAL":"0101",
                "FORNECEDOR":"000111",
                "LOJA":"01",
                "CONDFIN":"001",
                "OPERACAO":"1",
                "NUMERO":"",
                "EMISSAO":"",
                "NFISCAL":"",
                "SERIE":"",
                "ITENS":[{
                "ITEM":"001",
                "PRODUTO":"RD208009105",
                "QUANTIDADE":1,
                "VALUNIT":5
                },{
                "ITEM":"002",
                "PRODUTO":"RD208009106",
                "QUANTIDADE":1,
                "VALUNIT":5
                }]
            }]
            };
  
          const response = await axios.post(
            'http://rodoparanaimplementos120532.protheus.cloudtotvs.com.br:4050/rest/WSRDPXPEDCOM/',
            data
          );
          console.log(response)
          
          // O código de resposta está em response.status
          // Os dados da resposta estão em response.data
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao fazer a solicitação:', error);
        }
      },
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
    },
    created() {
      
      this.takeData()
    },
  };
  </script>
  