import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {} //should return an array of all recipes

// GET A RECIPE BY ID
export async function getRecipeByID(id) {} //should return the particular recipe we are looking for

// CREATE A RECIPE
export async function createRecipe(newRecipe) {} //should add a recipe to the collection and return the new recipe

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
