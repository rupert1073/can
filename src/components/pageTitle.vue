<template>
        <b-row align-v="center" class="page--title" >
            <b-col  md="8" >
                
                    <h1 v-if="title == ''">Add a page name here <span></span></h1>
                    <h1 v-if="title">{{title}} <span></span></h1>
                
            </b-col>
            <b-col  md="4"  class="right-text" >
                    <template v-if="showButtons">
                        <b-button class="btn primary_btn outline">
                            <eva-icon name="edit-outline" width="15"></eva-icon> Edit audition
                        </b-button>
                    </template>
               
                
                
            </b-col>
        </b-row>
</template>

<script>
  export default {
    props: {
        title: {
            type : String
        },
        showButtons:{ 
            type : Boolean,
            required: false,
            default : false,
        }
    },
    data() {
      return {
          
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
    
</style>

