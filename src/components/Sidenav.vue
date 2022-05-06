<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea.
      </md-app-content>
    </md-app>
  </div>
</template>

<style>
@media screen and (min-width: 959px) {
  #sidenav {
    display: none;
  } /* hide it on larger screens */
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdIcon, MdTabs, MdMenu, MdList } from "vue-material/dist/components";

Vue.use(MdTabs);
Vue.use(MdIcon);
Vue.use(MdMenu);
Vue.use(MdList);

const NavbarProps = Vue.extend({
  props: {
    propMessage: String,
  },
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    // since md-tabs doesn't natively support opening a link in a new window/tab
    newWindow: function(url: string) {
      window.open(url, "_blank");
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
});

@Component({
  components: {},
})
export default class Navbar extends NavbarProps {}
</script>
