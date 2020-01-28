<template>
  <div
    id="product-list"
    class="container"
  >
    <div class="row">
      <div class="col-md-6">
        <product-card
          v-if="productItem != '' "
          :product=productItem
          :productTemplate=productTemplate
        ></product-card>
      </div>
      <div class="col-md-6">
        <product-card
          v-if="productItem != '' "
          :product=productItem
          :productTemplate=productTemplate
        ></product-card>
      </div>

    </div>
  </div>
</template>

<script>
import ProductCard from './shared/product-card'
import { getProduct, getSetting } from '../api/index'

export default {
  name: "ProductCard",
  components: {
    'product-card': ProductCard
  },
  data () {
    return {
      productItem: '',
      productTemplate: '',
    }
  },
  methods: {
    getProduct,
    getSetting,

    async configTemplate () {
      try {
        const res = await this.getSetting();
        this.productTemplate = res.body;
        this.setup()
      } catch (error) {
        console.log(error)
      }
    },
    async setup () {
      try {
        const res = await this.getProduct();
        this.productItem = res.body[0];
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.configTemplate();

  }
}
</script>

<style lang="scss" scoped>
#product-list {
  padding: 30px 0px 35px 35px;
}
</style>
