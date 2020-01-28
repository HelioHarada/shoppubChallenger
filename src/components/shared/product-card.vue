<template>
  <div
    class="card"
    style="width: 18rem;"
    @mouseover="imageHover"
    @mouseleave="imageLeave"
  >
    <!-- figure imagem / tag -->
    <div class="figure">
      <div v-if="setting.show_favorite_widget">
        <span>Star</span>
      </div>
      <div class="header-figure">

        <div v-if="setting.show_tags">
          <div
            v-for="(item , index) in product.tags"
            :key="index"
          >
            <div
              class="tag"
              :style="{background : item.color}"
            >
              {{item.label}}
            </div>
          </div>
        </div>
      </div>

      <img
        :src="imageInit"
        class="card-img-top"
        alt="..."
      >

    </div>

    <!-- card body -->
    <div class="card-body">
      <h5 class="card-title text-center">{{product.title}}</h5>
      <!-- campaign -->
      <div class="campaign" v-if="setting.show_campaign_tags">
        <div
          v-for="(item, index) in product.campaign_tags"
          :key="index"
        >
          <div
            class="campaign-tags"
            :style="{background : item.color}"
          >
            {{item.label}}
          </div>
        </div>
      </div>
      <!-- price -->
      <div class="price">
        <p>
          De <span class="value-from">R${{pricing.total_value_from}}</span>
          por <span class="value-total">R${{pricing.total_value}}</span>
        </p>
        <p>
          ATÉ
          <span class="installments-quantity">{{pricing.installments.quantity}}X</span>
          de
          <span class="installments-quantity">R${{pricing.installments.installment_value}}</span>
        </p>
        <p>
          <span class="value-total">R${{pricing.installments.installment_value}}</span>
          label <span class="installments-quantity">5%</span> à vista
        </p>
      </div>

      <!-- attributes -->
      <div class="attributes">
        <div class="attributes-items">
          <div
            v-for="(item , index) in product.attributes"
            :key="index"
          >
            <div class="radio-block">
              <span>{{product.attributes[index].label}}</span>
            </div>

          </div>
        </div>
      </div>
      <!-- active hover -->
      <div
        v-if="activeInfo"
        class="more-info"
      >
        <div class="slider" v-if="setting.show_related_products">
          <slick
            ref="slick"
            :options="slickOptions"
          >
            <div
              v-for="(item , index) in product.related_products"
              :key="index"
            >
              <img
                :src="item.image"
                alt=""
              >
            </div>

          </slick>
        </div>
        <div class="btn-checkout">
          <button class="btn-buy">Comprar</button>
          <button class="btn-see">Ver</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


import Slick from 'vue-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
// import '../../../node_modules/slick-carousel/slick/slick-theme.scss';
export default {
  components: { Slick },
  props: ['product', 'productTemplate'],

  data () {
    return {
      activeInfo: false,
      imageInit: '',
      installments: '',
      pricing: '',
      setting: '',
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        accessibility: true,
        draggable: true,
        edgeFriction: 0.30,
        swipe: true
      },
    }
  },
  methods: {
    setup () {
      this.pricing = this.product.pricing
      this.installments = this.product.pricing.installments
      this.imageInit = this.product.images[0].cover
      this.setting = this.productTemplate.layout.product.list
    },
    // Hover Leave
    imageHover () {
      this.imageInit = this.product.images[0].hover
      this.activeInfo = true;
    },
    imageLeave () {
      this.imageInit = this.product.images[0].cover
      this.activeInfo = false;
    },
    // Events Slick
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick()
    },

  },
  created () {
    this.setup()
    console.log()

  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

// Card
.card {
  padding: 5px;
}
// image card
.card .figure {
  position: relative;
  width: 279px;
  height: 279px;
}

.header-figure {
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.tag {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 700;
  text-align: center;
  margin: 0;
  font-size: 11px;
}

.card .figure .tag-discount {
  margin-top: 2px;
  background-color: #e05618;
}

.card .figure .tag-new {
  background-color: #e05618;
}
// Campaign
.campaign {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
}
.campaign-tags {
  width: 99px;
  height: 26px;
  padding: 5px;
  font-size: 11px;
  letter-spacing: 1px;
  line-height: 20px;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 400;
  text-align: center;
}
// price / preço
.price {
  text-align: center;
}

.price p {
  margin-bottom: 2px;
}

.value-from {
  text-decoration: line-through;
}

.value-total {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 23px;
  color: #f45400;
  font-family: "Roboto";
  font-weight: 700;
}
.installments-quantity {
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 23px;
  color: #f45400;
  font-family: "Roboto";
  font-weight: 500;
}

// attributes

.attributes-items {
  display: flex;
}
.attributes-items .radio-block {
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-left: 3px;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #888888;
}

.attributes-items .radio-block:hover {
  border: 1px solid #7ab11b;
}

// Slick Slider
.slider {
  margin-top: 20px;
}

.slider img {
  width: 50px;
  margin-left: 15px;
  padding: 5px;
  border: 1px solid black;
}

// btn checkout
.btn-checkout {
  display: flex;
  justify-content: space-between;
}

.btn-checkout .btn-buy {
  width: 183px;
  height: 37px;
  background-color: #7ab11b;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  border: none;
  margin: 1px;
}

.btn-checkout .btn-see {
  width: 102px;
  height: 37px;
  background-color: #906378;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 27px;
  color: #ffffff;
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  border: none;
}
</style>
