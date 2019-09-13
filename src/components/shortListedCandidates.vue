<template>

        <div class="content-item shortlisted-candidates ">
               <div class="content_header">
                     <h3>Shortlisted candidates</h3>    
                     <p>
                         Add new candidates to job application.
                     </p>

               </div>
              

               <div class="content_body">
                  <div class="body_item" v-for="(candidate,index) in shortlisted_candidates" :key="index">
                        <b-row align-v="start">
                            <!-- User image -->
                            <b-col md="2" class="user_image">
                                <div class="image_container">
                                    <img :src="'/images/user' + candidate.id + '.jpg'">
                                </div>  
                                
                            </b-col>
                             <b-col md="8">
                                <!-- Username -->
                                <h4>{{candidate.name}}</h4>
                                <p>
                                    {{candidate.bio}}
                                </p>
                            </b-col>
                             <b-col md="2" class="right-text action-menu">
                                  <!-- DROPDOWN MENU ACTION -->
                                  <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                    <template v-slot:button-content>
                                        <eva-icon name="more-horizotnal"></eva-icon>
                                    </template>
                                    <b-dropdown-item href="#"><eva-icon name="eye-outline" fill="#000"></eva-icon> View profile</b-dropdown-item>
                                    <b-dropdown-item href="#"><eva-icon name="close-circle" fill="#FA3434"></eva-icon> Remove from shortlist</b-dropdown-item>
                                  </b-dropdown>
                                  <!-- END OF DROPDOWN MENU ACTION -->
                            </b-col>
                        </b-row>

                        
                  </div>
                  <div class="overflow-auto ">
                      <div class="mt-3">
                          <b-pagination align="center" v-model="currentPage" :total-rows="rows"></b-pagination>
                      </div>
                      
                  </div>
               </div>

                   
        </div>    
       
        
</template>

<script>
  export default {
    props: {
      
    },
    computed: { 
      rows() { 
          return this.shortlisted_candidates.length
      }
    },
    data() {
      return {
           currentPage: 1,
           search_query_shortlisted_candidates: '',
           shortlisted_candidates : [
              {
                id: '1',
                name : 'Can Mehmet',
                position : 'Role of Luna',
                applied_date: '20/12/2019',
                shortlisted: true,
                bio: 'Hello this is my bio. Im here to apply for role in this audition blah blah.',
                email: 'canmehmetcp@gmail.com',
                phone: '+38343715716',

              },
              {
                id: '2',
                name : 'Tan Wuhan',
                position : 'Role of Katie',
                applied_date: '20/12/2019',
                shortlisted: true,
                bio: 'Hello this is my bio. Im here to apply for role in this audition blah blah.',
                email: 'canmehmetcp@gmail.com',
                phone: '+38343715716',
              },
              {
                id: '3',
                name : 'Can Mehmet',
                position : 'Main actor',
                applied_date: '20/12/2019',
                shortlisted: false,
                bio: 'Hello this is my bio. Im here to apply for role in this audition blah blah.',
                email: 'canmehmetcp@gmail.com',
                phone: '+38343715716',
              }
              
           ] 
      }
    },
    methods: {
      
    }
  }
</script>



<style lang="scss" scoped>
       
    .header_search{
            margin-top:20px;
            


    }

    .pagination_container{
        margin:0 auto;
        text-align:center;

    }
</style>

