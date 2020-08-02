<template>
  <div class="pagination justify-center" >
    
  <v-expansion-panels class="dark">
      <v-expansion-panel v-for="i in filteredQues" :key="i.quesno">
        <v-expansion-panel-header>
          <ul>
            <li>Q{{i.quesno}}. {{i.ques}}</li>
            <br />
            <li>(a) {{i.op1}}</li>
            <br />
            <li>(b) {{i.op2}}</li>
            <br />
            <li>(c) {{i.op3}}</li>
            <br />
            <li>(d) {{i.op4}}</li>
            <br />
          </ul>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ul>
            <li>Answer: {{i.ans}}</li>
            <li>Explanation: {{i.explain}}</li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            page:1,
            newpage:this.page,
            ques:[
          {quesno:1,ques:"This is first question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:2,ques:"This is Second question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:3,ques:"This is Third question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:4,ques:"This is Fourth question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:5,ques:"This is first question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:6,ques:"This is Second question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:7,ques:"This is Third question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:8,ques:"This is Fourth question",op1:"@",op2:"#",op3:"$",op4:"&"},
        ],
        }
    },
    computed: {
      filteredQues(){
        return this.ques.slice(this.page*3-3,this.page*3);
      }
    }
}
</script>

<style>

</style>