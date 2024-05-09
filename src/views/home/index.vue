<template>
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/qweather-icons@1.3.1/font/qweather-icons.css">
  <div class="main">
    <div class="text-48px">南岸区</div>
    <div class="flex justify-center mb-48px">
      <div><i class="icon" :class="'qi-'+weather.icon"></i></div>
      <div class="showText">
        <div text-48px>{{weather.temp}}°</div>
        <div text-32px>{{weather.text}}</div>
      </div>
    </div>
    <div class="sevenDays">
      <div v-for="(item,index) in seven" :key="index" class="dayBox">
        <div class="flex justify-center">
          <div><i class="sevenIcon" :class="'qi-'+item.iconDay"></i></div>
          <div class="sevenShow">
            <div text-24px>{{item.tempMin}}°-{{item.tempMax}}°</div>
            <div text-24px>{{item.textDay}}</div>
          </div>
        </div>
        <div>{{item.fxDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { nowWeather, sevenWeather } from "@/api/api";
export default defineComponent({
  setup() {
    onMounted(() => {
      getNow();
      getSeven();
    });
    let weather = reactive({
      icon: undefined,
      temp: undefined,
    });
    const getNow = async () => {
      let obj = {
        location: "101044000",
      };
      const data = await nowWeather(obj);
      Object.assign(weather, data.now);
    };

    let seven = ref([]);
    const getSeven = async () => {
      let obj = {
        location: "101044000",
      };
      const data = await sevenWeather(obj);
      seven.value = data.daily;
    };
    return {
      weather,
      seven,
    };
  },
});
</script>

<style scoped>
.main {
  width: 80vw;
  height: 500px;
  border-radius: 48px;
  background: #f5f5f5;
  margin: 0 auto;
  text-align: center;
  padding: 48px;
  margin-top: 24px;
}
.icon {
  font-size: 82px;
}
.showText {
  margin: auto 8px;
  line-height: 48px;
  text-align: left;
}
.sevenIcon {
  font-size: 48px;
}
.sevenShow {
  margin: auto 8px;
  line-height: 32px;
  text-align: left;
}
.sevenDays {
  display: flex;
  justify-content: center;
}
.dayBox {
  width: 10vw;
}
</style>