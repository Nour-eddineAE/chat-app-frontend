import { createRouter, createWebHistory } from "vue-router";
import ChatView from "@/views/chat-view.vue";
import UsersList from "@/views/users-list.vue";

const routes = [
  {
    path: "/",
    redirect: "/users/sender",
  },
  {
    path: "/users/sender",
    alias: "/users/receiver",
    component: UsersList,
  },
  {
    path: "/chat",
    component: ChatView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
