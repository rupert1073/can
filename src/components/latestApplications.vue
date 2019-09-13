<template>
        
        <div class="content-item latest-applications ">

               <div class="content_header">
                  <b-row >
                    <b-col md="7" >
                      <template v-if="!search_active">
                          <h3>Recently applied candidates</h3>   
                          <p>
                              Candidates applied for this audition will be listed according to applied date.  
                          </p> 
                      </template>
                      <template v-else>
                          <h3>Search a candidate...</h3>  
                          <form>
                               <input class="search" @input="searchQuery" type="text" placeholder="E.x. Can Mehmet" v-model="search_query_candidates">
                          </form>
                         
                      </template>
                     
                    </b-col>
                    <b-col md="5" class="text-right">
                        <b-button class="btn primary_btn outline"  v-if="!search_active">
                            <eva-icon name="funnel-outline"  width="15"></eva-icon>
                            Filter
                        </b-button>
                        <template v-if="!search_active">
                            <b-button variant="link" @click="toggleSearch">
                               <eva-icon name="search-outline"  width="15"></eva-icon>
                                Search
                            </b-button>
                        </template>
                        <template v-else>
                             <b-button variant="link" @click="toggleSearch">
                                  Close search
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
                                <b-col md="2" class="user_image">
                                    <div class="image_container">
                                        <div class="shortlisted" v-if="application.shortlisted">
                                                <eva-icon width="15px" name="star" ></eva-icon>
                                        </div>
                                        <img :src="'/images/user' + application.id + '.jpg'">
                                    </div>  
                                    
                                </b-col>
                                <b-col md="8">
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
                                <b-col md="2" class="text-right">
                                      <!-- DROPDOWN MENU ACTION -->
                                      <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                        <template v-slot:button-content>
                                            <eva-icon name="more-horizotnal"></eva-icon>
                                        </template>
                                        <b-dropdown-item href="#"><eva-icon name="eye-outline" fill="#000"></eva-icon> View profile</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="star-outline" fill="#ED8A19"></eva-icon> Add to shortlist</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="pricetags" fill="#13B7FF"></eva-icon> Assign label</b-dropdown-item>
                                        <b-dropdown-item href="#"><eva-icon name="close-circle" fill="#FA3434"></eva-icon> Reject application</b-dropdown-item>
                                      </b-dropdown>
                                      <!-- END OF DROPDOWN MENU ACTION -->
                                </b-col>
                            </b-row>
                        </div>
                  </template>
                  <template v-else>
                         <div class="body_item">
                              Sorry, no candidate with this name.
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

