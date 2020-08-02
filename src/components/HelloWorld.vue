<template>
  <v-container>
    <div style="height:400px; background-color: Yellow">
    <h1>Test Line</h1>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        i: 2,
        ques:[
          {quesno:1,ques:"This is first question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:2,ques:"This is Second question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:3,ques:"This is Third question",op1:"@",op2:"#",op3:"$",op4:"&"},
          {quesno:4,ques:"This is Fourth question",op1:"@",op2:"#",op3:"$",op4:"&"},

        ]
      }
    },
    
  }
</script>
<style lang="scss" scoped>

</style>