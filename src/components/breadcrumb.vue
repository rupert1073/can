<template>
        <b-row>
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
        </b-row>

  
</template>

<script>
  export default {
    data() {
      return {
        breadcrumb: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Auditions',
            href: '#'
          },
          {
            text: 'Replacement for The Tour main actor feature film',
            active: true
          }
        ]
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
   
</style>
