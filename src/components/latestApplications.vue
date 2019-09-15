<template>
        
        <div class="content-item latest-applications ">

               <div class="content_header">
                  <b-row >
                    <b-col md="7" >
                      <template v-if="!search_active">
                          <h3>{{$t('latest_applications.latest_applications')}}</h3>   
                          <p>
                             {{$t('latest_applications.desc')}}
                          </p> 
                      </template>
                      <template v-else>
                          <h3>{{$t('latest_applications.search_candidate')}}</h3>  
                          <form>
                               <input class="search"  type="text" :placeholder="$t('latest_applications.search_candidate_ex')" v-model="search_query_candidates">
                          </form>
                         
                      </template>
                     
                    </b-col>
                    <b-col md="5" class="right-text">
                        <b-button class="btn primary_btn outline"  v-if="!search_active">
                            <eva-icon name="funnel-outline"  width="15"></eva-icon>
                            {{$t('buttons.filter')}}
                        </b-button>
                        <template v-if="!search_active">
                            <b-button variant="link" @click="toggleSearch">
                               <eva-icon name="search-outline"  width="15"></eva-icon>
                                  {{$t('buttons.search')}}
                            </b-button>
                        </template>
                        <template v-else>
                             <b-button variant="link" @click="toggleSearch">
                                   {{$t('buttons.search_close')}}
                             </b-button>
                        </template>

                           
                            
                       
                    </b-col>
                  </b-row>
               </div>

               <div class="content_body">
                  <template v-if="filteredList.length > 0">
                        <div class="body_item" v-for="(application,index) in filteredList" :key="index">
                            <b-row align-v="start">
                                <!-- User image -->
                                <b-col md="2" sm="2" class="user_image">
                                    <div class="image_container">
                                        <div class="shortlisted" v-if="application.shortlisted">
                                                <eva-icon width="15px" name="star" ></eva-icon>
                                        </div>
                                        <img :src="'/images/user' + application.id + '.jpg'">
                                    </div>  
                                    
                                </b-col>
                                <b-col md="8" sm="6">
                                      <!-- Username -->
                                      <h4>{{application.name}}

                                          <!-- Contact info -->
                                          <ul class="contact_info">
                                              
                                                <li v-if="application.email !== ''">
                                                  <a :href="'mailto:'+application.email" target="_blank" class="email">
                                                        <eva-icon width="15px" name="email-outline"></eva-icon>
                                                  </a>
                                                </li>   
                                                <li v-if="application.phone !== ''">
                                                  <a :href="'call:'+application.phone" target="_blank" class="phone">
                                                        <eva-icon width="15px" name="phone-outline" ></eva-icon>
                                                  </a>
                                                </li>  
                                            
                                              
                                          </ul>
                                      </h4>
                                      <!-- User bio -->
                                      <p>{{application.bio}}</p>

                                    

                                      
                                </b-col>
                                <b-col md="2" sm="2" class="right-text action-menu">
                                      <!-- DROPDOWN MENU ACTION -->
                                      <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                        <template v-slot:button-content>
                                            <eva-icon name="more-horizotnal"></eva-icon>
                                        </template>
                                        <b-dropdown-item href="#"><eva-icon name="eye-outline" fill="#000"></eva-icon> {{$t('buttons.view_profile')}}</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="star-outline" fill="#ED8A19"></eva-icon> {{$t('buttons.add_to_shortlist')}}</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="pricetags" fill="#13B7FF"></eva-icon> {{$t('buttons.assign_label')}}</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="close-circle" fill="#FA3434"></eva-icon>  {{$t('buttons.reject_application')}}</b-dropdown-item>
                                      </b-dropdown>
                                      <!-- END OF DROPDOWN MENU ACTION -->
                                </b-col>
                            </b-row>
                        </div>
                  </template>
                  <template v-else>
                         <div class="body_item">
                              {{$t('latest_applications.search_no_resulsts')}}
                         </div>
                  </template>
                  
               </div>

                   
        </div>    
       
        
</template>

<script>
  export default {
    props: {
      
    },
    computed: {
      filteredList() {
        return this.recent_applications.filter(candidate => {
          return candidate.name.toLowerCase().includes(this.search_query_candidates.toLowerCase())
        })
      }
    },
    data() {
      return {
           search_active: false,
           search_query_candidates: '',
           recent_applications : [] 
      }
    },
    methods: {
        fill_applications_data(){
             this.recent_applications.push(
              {
                  id: '1',
                  name : 'Can Mehmet',
                  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic iure! Eius vero ducimus excepturi a officia. Corporis, beatae, ad, accusantium sunt magnam ea nesciunt hic illo eaque soluta suscipit',
                  shortlisted: true,
                  email: 'canmehmetcp@gmail.com',
                  phone: '+38343715716',

                },
                {
                  id: '2',
                  name : 'Tan Wuhan',
                  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic iure! Eius vero ducimus excepturi a officia. Corporis, beatae, ad, accusantium sunt magnam ea nesciunt hic illo eaque soluta suscipit',
                  shortlisted: true,
                  email: 'canmehmetcp@gmail.com',
                  phone: '+38343715716',
                },
                {
                  id: '3',
                  name : 'Can Mehmet',
                  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic iure! Eius vero ducimus excepturi a officia. Corporis, beatae, ad, accusantium sunt magnam ea nesciunt hic illo eaque soluta suscipit',
                  shortlisted: false,
                  email: 'canmehmetcp@gmail.com',
                  phone: '+38343715716',
                }
            )
        },
        toggleSearch:function(){
            this.search_active = !this.search_active
            this.search_query_candidates = ''
        },
        
    },
    mounted(){
        this.fill_applications_data()
    }
  }
</script>

