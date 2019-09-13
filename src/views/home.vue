<template>
  <main>
    
      <b-container>
        <breadcrumb/>
        <page-title title="Audtion for main actor" showButtons/>
        <top-widgets/>
      
        <b-row  align-v="start" class="page--content">
            <b-col md="7">
               <latest-applications/>
            </b-col>
            <b-col md="5">
                <shortlisted-candidates/>
            </b-col>
        </b-row>

      </b-container>
      

      
  </main>


</template>



<script>
import breadcrumb from "@src/components/breadcrumb"
import pageTitle from "@src/components/pageTitle"
import topWidgets from "@src/components/topWidgets"
import latestApplications from "@src/components/latestApplications"
import shortlistedCandidates from "@src/components/shortListedCandidates"
export default {
  name: 'Homepage',
  components: {
      'breadcrumb': breadcrumb,
      'page-title': pageTitle,
      'top-widgets': topWidgets,
      'latest-applications': latestApplications,
      'shortlisted-candidates': shortlistedCandidates,
  },
  data () {
    return {
        
    }
  },
  metaInfo: {
      title: 'Welcome',
      meta: [
        { name: 'description', content: 'Page description goes here.' },
        {
          'property': 'og:site_name',
          'content': 'About Loycha',
          'vmid': 'og:site_name'
        },
        {
          'property': 'og:title',
          'content': 'Test title',
          'vmid': 'og:title'
        },
        {
          'property': 'og:image',
          'content': 'https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png',
          'vmid': 'og:image'
        },
         {
          'property': 'og:url',
          'content': 'https://davidwalsh.name/facebook-meta-tags',
          'vmid': 'og:url'
        },
        {
          'property': 'og:type',
          'content': 'website',
          'vmid': 'og:type'
        }

      ],
  },
  
  methods : {
    
    
   },
  beforeUpdate() {
        
  },
  updated() {
     
  },
  beforeMount(){
    
  },
  

}
</script>

