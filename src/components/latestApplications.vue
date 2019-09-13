<template>
        <b-col sm="8" >
                <div class="content-item latest-applications ">
                        <b-row align-v="center" class="content_header">
                            <b-col md="8">
                                <h3>Recently applied candidates</h3>
                            </b-col>
                            <b-col md="4" class="text-right">
                                <b-button class="btn primary_btn outline">
                                    <eva-icon name="funnel-outline"  width="15"></eva-icon>
                                    Filter
                                </b-button>
                            </b-col>
                        </b-row>
                </div>    
        </b-col>
        
</template>

<script>
  export default {
    props: {
      
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
        .content-item{
            margin-bottom:90px;
            background:#fff;
            padding:20px 0;
            box-sizing: border-box;
            .content_header{
                 box-sizing: border-box;   
                 border:1px solid #efefee
            }
        }
</style>

