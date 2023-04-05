<template>
  <div class="catagory-header">
    <div class="cat">
      <h3>Categories</h3>
      <div class="category">
        <select name="category" id="category" v-model="category">
          <option value="all">All</option>
          <option value="eye">Eye</option>
          <option value="face">Face</option>
          <option value="lips">Lips</option>
        </select>
      </div>
    </div>

    <div class="tabs">
      <div
        v-for="(tab, i) in makeupTabs"
        :key="tab"
        class="tab"
        @click="activeIndex = i"
        :class="{ active: activeIndex === i }"
      >
        {{ tab }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps, ref } from "vue";
export default {
  data() {
    return {
      makeupTabs: [
        "NEW ARRIVALS",
        "SPECIALS",
        "BESTSELLERS",
        "MOST VIEWED",
        "FEATURED PRODUCTS",
      ],
      category,
    };
  },
};
const activeIndex = ref(0);
const makeupTabs = [
  "NEW ARRIVALS",
  "SPECIALS",
  "BESTSELLERS",
  "MOST VIEWED",
  "FEATURED PRODUCTS",
];
</script>

<style scoped>
.catagory-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
}
.cat {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
}
.catagory-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.category select {
  border: 1px solid #eee;
  padding: 3px 5px;
  border-radius: 4px;
}

.category select:after {
  border: 6px solid transparent;
  border-radius: 5px;
}

.tabs {
  display: flex;
  align-items: center;
}
.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}
@media (max-width: 969px) {
  .tabs {
    display: none;
  }
}
</style>
