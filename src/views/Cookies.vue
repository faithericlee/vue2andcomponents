<template>
  <div>
    <h1>js-cookie示例</h1>
    cookie有效期<input name="" v-model="expirein" />天<br />
    向cookie写入值（key=cv）<input name="" v-model="cv" />
    <hr />
    <button @click="readcv">读取cookie值</button>cv={{ fromcv }}<br />
    <button @click="removecv">删除cookie值</button>
    <hr/>
    <button @click="readjson">读写json</button>
  </div>
</template>

<script>
import Cookies from "js-cookie";
export default {
  data: function() {
    return {
      expirein: 10,
      cv: "",
      fromcv: ""
    };
  },
  watch: {
    cv: function(newval) {
      console.log(newval, this.expirein);

      Cookies.set("cv", newval, { expires: Number(this.expirein), path: "" });
    }
  },
  methods: {
    readcv() {
      this.fromcv = Cookies.get("cv");
      console.log("cv in cookie", this.fromcv);
    },
    removecv() {
      Cookies.remove("cv", { path: "" });
    },
    readjson() {
      const user = {
        name: "lia",
        age: 18
      };
      Cookies.set("user", user);
      const liaUser = JSON.parse(Cookies.get("user"));
      console.log(Cookies.get("user"));
      console.log(liaUser);
    }
  }
};
</script>
