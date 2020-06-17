<template>
  <div class="container-chat">
    <div>
      <div class="donut-chart-block block">
        <div class="donut-chart">
          <div id="section1" class="clip">
            <div class="item" data-rel="21"></div>
          </div>
          <div id="section3" class="clip">
            <div class="item" data-rel="31"></div>
          </div>
          <div id="section4" class="clip">
            <div class="item" data-rel="9"></div>
          </div>
          <div class="center"></div>
        </div>
      </div>
    </div>
    <div class="label-chart">
      <div class="box-index">
        <div class="index-chart color-index01"></div>
        <div class="title-index">Na média</div>
        <span>50%</span>
      </div>
      <div class="box-index">
        <div class="index-chart color-index03"></div>
        <div class="title-index">Acima da média</div>
        <span>25%</span>
      </div>
      <div class="box-index">
        <div class="index-chart color-index02"></div>
        <div class="title-index">Abaixo da média</div>
        <span>25%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chart",
};
</script>

<style lang="scss">
.container-chat {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
  .label-chart {
    margin-top: 80px;
    .box-index {
      margin-bottom: 15px;
      span {
        font-size: 12px;
        color: #a5abb7;
        margin-left: 10px;
      }
      .index-chart {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .title-index {
      display: inline-block;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 500;
    }
  }
  .block {
    margin: 25px 25px 0 0;
    border-radius: 5px;
    width: 115px;
  }

  .donut-chart {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 2rem auto;
    border-radius: 100%;
  }

  .donut-chart .center {
    background: #fff;
    position: absolute;
    top: 30px;
    left: 30px;
    height: 140px;
    width: 140px;
    border-radius: 70px;
  }

  .clip {
    border-radius: 50%;
    clip: rect(0px, 200px, 200px, -1px);
    height: 100%;
    position: absolute;
    width: 100%;
  }
  [class^="functional-name-"] {
    position: absolute;
    color: #000;
    font-size: 1rem;
    z-index: 9999;
  }
  .item {
    border-radius: 50%;
    clip: rect(0px, 100px, 200px, 0px);
    height: 100%;
    position: absolute;
    width: 100%;
    font-family: monospace;
    font-size: 1.5rem;
  }

  #section1 {
    transform: rotate(0deg);
  }
  .functional-name-1 {
    z-index: 9999;
    top: -20px;
  }

  #section1 .item {
    background-color: #ec4c47;
    transform: rotate(95deg);
  }

  #section2 {
    transform: rotate(95deg);
  }
  .functional-name-2 {
    right: -20px;
  }

  #section3 {
    transform: rotate(180deg);
  }
  .functional-name-3 {
    right: -10px;
    bottom: -10px;
  }
  #section3 .item {
    background-color: #f7d154;
    transform: rotate(90deg);
  }

  #section4 {
    transform: rotate(-90deg);
  }
  .functional-name-4 {
    bottom: -20px;
    left: -40px;
  }
  #section4 .item {
    background-color: #002960;
    transform: rotate(95deg);
  }

  .color-index01 {
    background-color: #1070ca;
  }
  .color-index02 {
    background-color: #f7d154;
  }
  .color-index03 {
    background-color: #ec4c47;
  }
}
</style>
