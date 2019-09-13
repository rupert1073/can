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
            text: 'Position',
            href: '#'
          },
          {
            text: 'Frontend developer',
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
