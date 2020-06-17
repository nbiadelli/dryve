<template>
  <div class="container-dashboard box">
    <div class="box-idex">
      <div>
        <card-box>
          <div class="card-index">
            <div class="index">
              <h2>AVALIAÇÕES HOJE</h2>
              <div>29</div>
              <div>36%</div>
              <span>desde ontem</span>
            </div>
            <div class="icon-index">
              <div class="icon">
                <div>
                  <img src="../assets/img/car.svg" alt />
                </div>
              </div>
            </div>
          </div>
        </card-box>
      </div>
      <div>
        <card-box>
          <div class="card-index">
            <div class="index">
              <h2>CARROS PUBLICADOS</h2>
              <div>397</div>
              <div>4%</div>
              <span>este mês</span>
            </div>
            <div class="icon-index">
              <div class="icon">
                <div>
                  <img src="../assets/img/mobile.svg" alt />
                </div>
              </div>
            </div>
          </div>
        </card-box>
      </div>
      <div>
        <card-box>
          <div class="card-index">
            <div class="index">
              <h2>TICKET MÉDIO DO ESTOQUe</h2>
              <div>R$ 42.567</div>
              <div>6%</div>
              <span>desde ontem</span>
            </div>
            <div class="icon-index">
              <div class="icon">
                <div>
                  <img src="../assets/img/money.svg" alt />
                </div>
              </div>
            </div>
          </div>
        </card-box>
      </div>
    </div>

    <div class="box-car">
      <card-box>
        <div class="card-evaluation">
          <div>
            <h1>Últimas avaliações</h1>
          </div>
          <div>
            <h1>Hoje</h1>
          </div>
        </div>
        <div>
          <div class="title-evaluation">
            <div>
              <h2 class="margin-title">DADOS DO VEÍCULO</h2>
            </div>
            <div>
              <h2 class="margin-title">VALOR</h2>
            </div>
            <div>
              <h2 class="margin-title">STATUS</h2>
            </div>
          </div>
        </div>
        <div class="evaluation">
          <div
            class="list-evaluation"
            v-for="item in this.carList"
            :key="item.id"
          >
            <div>
              <img v-bind:src="item.image" />
            </div>
            <div class="list-info">
              <ul>
                <li>{{ item.brand_name }} - {{ item.model_name }}</li>
                <li>{{ item.version_name }}</li>
                <li>{{ item.model_year }} - {{ item.fuel_type }}</li>
                <li>{{ item.transmission_type }} - {{ item.mileage }}</li>
              </ul>
            </div>
            <div class="list-info">
              <ul>
                <li>ANÙNCIO</li>
                <li>R${{ item.ad_selling_price }}</li>
                <li>MÌNIMO ACEITO</li>
                <li>R${{ item.ad_selling_price }}</li>
              </ul>
            </div>
            <div class="list-info">
              <ul>
                <div class="status">
                  <li>Aguardando precificação</li>
                </div>
                <li class="time">18/04/2020 às 14:35</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-evaluation"></div>
      </card-box>
      <div>
        <card-box>
          <div class="title-ranking">
            <h1>Top intenções de compra</h1>
          </div>
          <div class="ranking" v-for="item in this.listTop" :key="item.id">
            <div class="box-ranking">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{ item.brand }}</p>
              </div>
              <div>
                <p>{{ item.total }}</p>
              </div>
            </div>
          </div>
        </card-box>
        <card-box class="margin-20">
          <div class="title-ranking">
            <h1>Preços - Dryve x KBB</h1>
            <div class="chart-kbb">
              <chart></chart>
            </div>
          </div>
        </card-box>
      </div>
    </div>
  </div>
</template>

<script>
import CardBox from "./CardBox.vue";
import Chart from "./chart.vue";
import { mapState } from "vuex";

export default {
  name: "Dashboard",
  components: {
    CardBox,
    Chart,
  },

  data() {
    return {
      listTop: [
        {
          brand: "HB20",
          total: 197,
          img: require("@/assets/img/hb20.jpg"),
          typ: true,
        },
        {
          brand: "Onix",
          total: 183,
          img: require("@/assets/img/chevrolet.jpg"),
        },
        {
          brand: "Renegade",
          total: 125,
          img: require("@/assets/img/jep.jpg"),
        },
        {
          brand: "T-Cross",
          total: 109,
          img: require("@/assets/img/tcross.jpg"),
        },
        {
          brand: "Kicks",
          total: 80,
          img: require("@/assets/img/nissan.jpg"),
        },
      ],
    };
  },

  computed: {
    ...mapState(["carList"]),
  },
};
</script>

<style scoped lang="scss">
.container-dashboard {
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px 640px;
  @media screen and (min-width: 0px) and (max-width: 1366px) {
    grid-template-rows: repeat(auto-fit, minmax(300px, 2fr));
  }

  grid-gap: 20px;
  position: relative;
  top: 18px;
  left: 40px;
  font-size: 10px;
  color: #768095;

  h2 {
    width: 185px;
    opacity: 0.5;
    font-size: 10px;
    font-weight: 500;
    text-align: left;
    line-height: 1.6;
    letter-spacing: 1.5px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 10px;
  }

  h1 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.87);
    margin-top: 18px;
  }

  .box-idex {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 20px;
    @media screen and (min-width: 0px) and (max-width: 1519px) {
      grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
    }
    .card-index {
      padding: 10px 10px 10px 0px;
      display: grid;
      grid-template-columns: 4.4fr 1fr;
      margin-left: 15px;
      text-align: left;
      .index {
        div:nth-child(2) {
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.06;
          letter-spacing: normal;
          color: rgba(0, 0, 0, 0.87);
        }
        div:nth-child(3) {
          font-size: 12px;
          line-height: 1.33;
          letter-spacing: 0.4px;
          color: #6200ee;
          display: inline;
        }
      }
      .icon-index {
        .icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #f3f7ff;
          margin: 0 auto;
          position: relative;
          top: 7px;

          > div {
            margin: 0 auto;
            width: 35px;
            height: 30px;
            img {
              width: 35px;
              height: 35px;
              position: relative;
              top: 14px;
            }
          }
        }
      }
    }
  }

  .box-car {
    border-radius: 4px;
    display: grid;
    grid-template-columns: 907px 1fr;
    max-height: 530px;
    grid-gap: 20px;
    @media screen and (min-width: 0px) and (max-width: 1519px) {
      grid-template-columns: repeat(auto-fit, minmax(660px, 2fr));
    }

    .box-card:nth-child(2) {
      height: 303px;
    }

    .evaluation {
      max-height: 574px;
      overflow: scroll;
      overflow-x: hidden;
      .list-evaluation {
        display: grid;
        grid-template-columns: 0.5fr 1fr 1fr 1fr;
        border-bottom: solid 1px rgba(0, 0, 0, 0.12);
        height: 97px;

        img {
          width: 80px;
          height: 60px;
          border-radius: 4px;
          border: solid 1px #e0e0e0;
          position: relative;
          top: 20px;
        }

        .list-info {
          text-align: left;
          ul {
            position: relative;
            top: 20px;
          }
          li {
            line-height: 1.7;
            letter-spacing: 0.33px;
            list-style: none;
          }
          li:nth-child(1) {
            height: 16px;
            color: #1e2c4c;
            font-weight: bold;
          }
        }
      }
    }
    .card-evaluation {
      display: grid;
      grid-template-columns: 2fr 1fr;
      height: 65px;

      div:nth-child(1) {
        text-align: left;
        margin-left: 15px;
      }
      div:nth-child(2) {
        text-align: right;
        margin-right: 15px;
      }
    }

    .title-evaluation {
      display: grid;
      grid-template-columns: 1.3fr 1fr 1fr;
      border-bottom: solid 1px rgba(0, 0, 0, 0.12);
      h2.margin-title {
        margin-left: 15px;
      }
    }

    .footer-evaluation {
      height: 37px;
      border-top: solid 1px rgba(0, 0, 0, 0.12);
    }

    .status {
      width: 176px;
      height: 26px;
      border-radius: 13px;
      background-color: #f3f7ff;
      li {
        text-align: center;
        padding-top: 7px;
        color: #768095;
      }
    }

    .time {
      width: 176px;
      height: 26px;
      text-align: center;
      margin-top: 5px;
    }

    .ranking {
      .box-ranking {
        height: 66px;
        display: grid;
        grid-template-columns: 0.5fr 2fr 1fr;
        img {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          border: solid 1px rgba(0, 0, 0, 0.12);
          margin-right: 14px;
        }
        p {
          font-size: 14px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.71;
          letter-spacing: 0.1px;
          color: rgba(0, 0, 0, 0.87);
          position: relative;
          top: 15px;
        }
        div {
          padding-top: 8px;
          border-bottom: solid 1px rgba(0, 0, 0, 0.12);
        }

        div:nth-child(2) {
          text-align: left;
        }
      }
    }

    .title-ranking {
      h1 {
        margin-left: 20px;
      }
      text-align: left;
      margin: 30px 5px 8px;
    }
  }
  .margin-20 {
    margin-top: 20px;
  }
}
</style>
