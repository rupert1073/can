<template>
  <main>
      <!-- Contaienr -->
      <b-container>
        <breadcrumb/>
        <!--  Page title component 
            Accepts : title and ShowButtons
            title : String
            ShowButtons : boolean
         -->
        <page-title title="Audtion for main actor" showButtons/>
        <!-- Top Widgets -->
        <top-widgets/>
        <!-- START ROW -->
        <b-row  align-v="start" class="page--content">
            <b-col md="7">
               <!-- LATEST APPLIACTIONS -->
               <latest-applications/>
            </b-col>
            <b-col md="5">
                <!-- SHORTLISTED APPLIACTIONS -->
                <shortlisted-candidates/>
            </b-col>
        </b-row>
        <!-- END ROW -->
      </b-container>
      <!-- END Contaienr -->
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

