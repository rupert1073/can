<template>
    <b-navbar toggleable="lg" type="light" variant="white" >
        <b-container>
            <b-navbar-brand href="#">
                       <img src="/images/logo.svg">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">{{$t('menu.all_projects')}}</b-nav-item>
                <b-nav-item href="" class="nav-with-icon">
                        <img src="/images/add.svg" >
                        <p>
                            {{$t('menu.create_project')}}
                        </p>
                </b-nav-item>

                
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item href="" class="nav-with-icon">
                        <eva-icon name="settings-2-outline" height="15px"></eva-icon>
                        <p>
                            {{$t('menu.settings')}}
                        </p>
                </b-nav-item>

                <b-nav-item-dropdown :text="$t('menu.language')" right>
                    <b-dropdown-item href="#" @click="changeLanguage('en')">En</b-dropdown-item>
                    <b-dropdown-item href="#" @click="changeLanguage('tr')">Tr</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content vertical-align="top">
                   <b-img src="/images/martin.png" width="20px" rounded="circle" alt="dasdasa"></b-img>
                </template>
                <b-dropdown-item href="#">{{$t('menu.profile')}}</b-dropdown-item>
                <b-dropdown-item href="#">{{$t('menu.signout')}}</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-container>
            
        </b-navbar>
   



</template>

<script>
    export default {
        name: "up",
        data() {
            return {
                
            }
        },
        methods: {
            changeLanguage: function(value){
                 this.$i18n.set(value)
            },
        },
        created() {

            
        }
    }

</script>


<style lang="scss" scoped>
    .nav-with-icon{
        p,svg{
            vertical-align: middle;
            display: inline-block;
        }
        p{
            padding-left:5px;
            margin:0;
        }
        svg{
            fill: #3B3E46;
        }
    }
</style>
