<template>
    <b-navbar toggleable="lg" type="light" variant="white" >
        <b-container>
            <b-navbar-brand href="#">
                       <img src="/images/logo.svg">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">All projects</b-nav-item>
                <b-nav-item href="" class="nav-with-icon">
                        <img src="/images/add.svg" >
                        <p>
                            Create a project
                        </p>
                </b-nav-item>

                
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">

                <b-nav-item href="" class="nav-with-icon">
                        <eva-icon name="settings-2-outline" height="15px"></eva-icon>
                        <p>
                            Settings
                        </p>
                </b-nav-item>

                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#" @click="changeLanguage('en')">En</b-dropdown-item>
                    <b-dropdown-item href="#" @click="changeLanguage('tr')">Tr</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content vertical-align="top">
                   <b-img src="/images/martin.png" width="20px" rounded="circle" alt="dasdasa"></b-img>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-container>
            
        </b-navbar>
    <!-- 
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"  @click="$router.push('/')">Home</el-menu-item>
       
        <el-menu-item index="3" @click="$router.push('/components')">Components</el-menu-item>
        <el-menu-item index="4"  @click="$router.push('/somethingUnOrdinary')">404</el-menu-item>
        <el-menu-item index="5"  @click="$router.push('/vuex')">Vuex</el-menu-item>
       
    </el-menu>
    -->

    <!--
    <div class="row">
        <header>
            <div class="input-group-btn search-panel h-a-ikon" title="Dil Seçeneği">
                                        <button type="button" class="btn btn-default dropdown-toggle a-i-bg h-dil" data-toggle="dropdown">TR</button>
                                        <ul class="dropdown-menu acilir-ikon h-bayrak-bg" role="menu" style="left:-11px;">
                                            <li><a  href="#">TR</a></li>
                                            <li><a @click="changeLanguage('en')"  href="#">EN</a></li>
                                        </ul>
            </div>
           
           
        </header>
    </div>
    -->



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
