<template>
  <!-- レンダリングする時点でsmoothieが取得できていない可能性があるため存在チェックする -->
  <div v-if="smoothie" class="add-smoothie container z-depth-1">
    <h2 class="center-align indigo-text">Edit Smoothie Recipe</h2>
    <form @submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'
import slugify from 'slugify'
export default {
  name: 'EditSmoothie',
  data(){
    return{
      smoothie: null,
      another: null,
      feedback: null
    }
  },
  created() {
    // let ref = db.collection('smoothies').doc(id) こうしたいところだがidが無いので下記の方法で取得
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  },
  methods: {
    editSmoothie() {
      const smoothie = this.smoothie
      if(smoothie.title){
        smoothie.feedback = null
        smoothie.slug = slugify(smoothie.title, {
          replacement: '-',
          remove: /[$*_=~.'"\-:@]/g, 
          lower: true
        })
        debugger;
        db.collection('smoothies').doc(smoothie.id).update({
          title: smoothie.title,
          ingredients: smoothie.ingredients,
          slug: smoothie.slug
        }).then(() => {
          this.$router.push({name: 'Index'})
        }).catch((e) => {
          alert(e)
        })
      }else{
        this.feedback = 'input title'
      }
    },
    addIng() {
      if(this.another) {
        this.smoothie.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'input ingredient'
      }
    },
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter(x => {
        return ing != x
      })
    }
  }
}
</script>