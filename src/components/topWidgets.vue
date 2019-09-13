<template>
  <b-row class="justify-content-md-center">
        <b-col sm="3">
            <!-- Start of widget item -->
            <div class="widget_item">
                <b-row class="justify-content-md-center">
                    <b-col sm="2">
                      <div class="icon">
                          <eva-icon name="person-add-outline"></eva-icon>
                      </div>
                    </b-col>
                    <b-col sm="10">
                       <div class="content">
                            <h2>86</h2>
                            <p>
                              {{$t('widgets.new_applications')}}
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </div>  
            <!-- end of widget item -->
        </b-col>
        <b-col sm="3">
           <!-- Start of widget item -->
            <div class="widget_item">
                <b-row class="justify-content-md-center">
                    <b-col sm="2">
                      <div class="icon">
                         <eva-icon name="star-outline"></eva-icon>
                      </div>
                    </b-col>
                    <b-col sm="10">
                       <div class="content">
                            <h2>12</h2>
                            <p>
                               {{$t('widgets.shortlisted')}}
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </div>  
            <!-- end of widget item -->
        </b-col >
        <b-col sm="3">
            <!-- Start of widget item -->
            <div class="widget_item">
                <b-row class="justify-content-md-center">
                    <b-col sm="2">
                      <div class="icon">
                          <eva-icon name="person-delete-outline"></eva-icon>
                      </div>
                    </b-col>
                    <b-col sm="10">
                       <div class="content">
                            <h2>50</h2>
                            <p>
                              {{$t('widgets.rejected')}}
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </div>  
            <!-- end of widget item -->
        </b-col>
        <b-col sm="3">
            <!-- Start of widget item -->
            <div class="widget_item">
                <b-row class="justify-content-md-center">
                    <b-col sm="2">
                      <div class="icon">
                          <eva-icon name="person-done-outline"></eva-icon>
                      </div>
                    </b-col>
                    <b-col sm="10">
                       <div class="content">
                            <h2>2</h2>
                            <p>
                               {{$t('widgets.selected')}}
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </div>  
            <!-- end of widget item -->
        </b-col>


  </b-row>
  
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            feature: 'i18n Vuex',
            description: 'Vuejs Vuex Localization',
            status: 'Done'
          }, 
          {
            feature: 'Element UI',
            description: 'Element UI implemented',
            status: 'Done'
          }, 
          {
            feature: 'Custom Alias',
            description: 'Custom alias for your folder structure',
            status: 'Done'
          }, 
          {
            feature: 'Vue-Router',
            description: 'Navigation between routes',
            status: 'Done'
          },
          {
            feature: 'VueX',
            description: 'Vuex Store modular method has been implemented',
            status: 'Done'
          },
          {
            feature: 'Global alerts',
            description: 'Global alerts are implemented',
            status: 'Done'
          },
          {
            feature: 'Axios',
            description: 'Make http request',
            status: 'Soon'
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
    .widget_item{
        background:#fff;
        padding:20px;
        border-radius:5px;
        border: 1px solid #ECECEC;
        
        h2{
          color:#000;
          margin:0;
        }
        p{
          margin:0;
          font-weight:300;
          font-size:14px;
        }

    }
</style>