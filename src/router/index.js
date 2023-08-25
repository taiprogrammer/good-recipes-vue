import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home/Index.vue";
import Login from "../pages/Login/Index.vue";
import Signup from "../pages/Signup/Index.vue";
import Recipe from "../pages/Recipe/Index.vue";
import NewRecipe from "../pages/NewRecipe/Index.vue";
import MyRecipes from "../pages/MyRecipes/Index.vue";
import Profile from "../pages/Profile/Index.vue";
import MyFavorites from "../pages/MyFavorites/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup,
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/new-recipe",
    name: "New Recipe",
    component: NewRecipe,
  },
  {
    path: "/my-recipes/:id",
    name: "My Recipes",
    component: MyRecipes,
  },
  {
    path: "/my-profile/:id",
    name: "My Profile",
    component: Profile,
  },
  {
    path: "/my-favorites/:id",
    name: "My Favorites",
    component: MyFavorites,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
