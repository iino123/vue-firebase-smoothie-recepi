<template>
  <!-- レンダリングする時点でsmoothieが取得できていない可能性があるため存在チェックする -->
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit a Smoothie {{ this.smoothie.title }}</h2>
  </div>
</template>

<script>
import db from '../firebase/init'
export default {
  name: 'EditSmoothie',
  data(){
    return{
      smoothie: null
    }
  },
  created() {
    // let ref = db.collection('smoothies').doc(id)
    let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.smoothie = doc.data()
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>

<style>

</style>