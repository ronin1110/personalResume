/*
 * @Description:
 * @Author: zhang_weidie
 * @Date: 2020-06-19 15:23:54
 */
import Vue from 'vue'
import Vuex from 'vuex'
let vm = new Vue()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomId:-1,//选中的房屋ID
    nowPageSize: 20, //当前size
    nowPageIndex: 1, //当前index
    nowListName: '', //当前list名称
    locationInfo: null, // 记录当前所选定位信息
    currentOrg: {}, //当前的组织
    currentRole: {}, //当前的角色
    currentChoose: [{}, {}, {}], //通讯录当前选择项目数据
    foodData: [], //面包屑，为了数据加载更快的方法
    childData: [], //子级数据的集合
    orgData:[],//所有组织机构的树
    orgId: '', // 机构id
    pageSizeSelect: [ 20, 50, 100],
    collectScrollTop: 0, // 采集管理，记录scrollTop，用于还原
    collectManageIdx: '', // 采集管理，记录tab索引
    propertyList: [], // 物业列表
    villageList: [], // 小区列表
    propertyWorkForm:"",//实事编辑数据
    currentSeclectHouse :'',//当前选中的房子
  },
  getters: {
    propertyWorkForm: (state) => state.propertyWorkForm,
    currentSeclectHouse: (state) => state.currentSeclectHouse,
    roomId: (state) => state.roomId,
    nowPageSize: (state) => state.nowPageSize,
    nowPageIndex: (state) => state.nowPageIndex,
    nowListName: (state) => state.nowListName,
    getLocationInfo: (state) => state.locationInfo,
    foodData: (state) => state.foodData,
    childData: (state) => state.childData,
    orgData: (state) => state.orgData,
    currentRole: (state) => state.currentRole,
    currentOrg: (state) => state.currentOrg,
    currentChoose: (state) => state.currentChoose,
    orgId: (state) => state.orgId,
    pageSizeSelect: (state) => state.pageSizeSelect,
    collectScrollTop: (state) => state.collectScrollTop,
    collectManageIdx: (state) => state.collectManageIdx,
    propertyList: (state) => state.propertyList,
    villageList: (state) => state.villageList,
  },
  mutations: {

    SET_CUTTENT_SECLECT_HOUSE:(state, currentSeclectHouse)=>{
      state.currentSeclectHouse = currentSeclectHouse
    },
    SET_PROPERTY_WORK_FORM:(state, propertyWorkForm) => {
      state.propertyWorkForm = propertyWorkForm
    },
    SET_ROOM_ID: (state, roomId) => {
      state.roomId = roomId
    },
    SET_NOW_PAGE_SIZE: (state, nowPageSize) => {
      state.nowPageSize = nowPageSize
    },
    SET_NOW_PAGE_INDEX: (state, nowPageIndex) => {
      state.nowPageIndex = nowPageIndex
    },
    SET_NOW_LIST_NAME: (state, nowListName) => {
      state.nowListName = nowListName
    },
    setLocationInfo(state, locationInfo) {
      state.locationInfo = locationInfo
    },
    SET_FOOD_DATA: (state, foodData) => {
      state.foodData = foodData
    },
    SET_CHILD_DATA: (state, childData) => {
      state.childData = childData
    },
    SET_ORG_DATA: (state, orgData) => {
      state.orgData = orgData
    },
    SET_CURRENT_CHOOSE_IDX: (state, currentChooseIdx) => {
      state.currentChooseIdx = currentChooseIdx
    },
    SET_CURRENT_CHOOSE: (state, currentChoose) => {
      state.currentChoose = currentChoose
    },
    SET_ORG(state, p) {
      state.currentOrg = p
    },
    SET_ROLE(state, p) {
      state.currentRole = p
    },
    setOrgId(state, val) {
      state.orgId = val
    },
    setCollectScrollTop(state, val) {
      state.collectScrollTop = val
    },
    setCollectManageIdx(state, val) {
      state.collectManageIdx = val
    },
    setPropertyList (state, val) {
      state.propertyList = val
    },
    setVillageList (state, val) {
      state.villageList = val
    },
  },
  actions: {
    setPropertyWorkForm({ commit }, data) {
      commit('SET_PROPERTY_WORK_FORM', data)
    },
    setCurrentSeclectHouse({ commit }, data) {
      commit('SET_CUTTENT_SECLECT_HOUSE', data)
    },
    setRoomId({ commit }, data) {
      commit('SET_ROOM_ID', data)
    },
    setPageSize({ commit }, data) {
      commit('SET_NOW_PAGE_SIZE', data)
    },
    setPageIndex({ commit }, data) {
      commit('SET_NOW_PAGE_INDEX', data)
    },
    setListName({ commit }, data) {
      commit('SET_NOW_LIST_NAME', data)
    },
    setFoodData({ commit }, data) {
      commit('SET_FOOD_DATA', data)
    },
    setChildData({ commit }, data) {
      commit('SET_CHILD_DATA', data)
    },
    setOrgData({ commit }, data) {
      commit('SET_ORG_DATA', data)
    },
    setCurrentChooseIdx({ commit }, data) {
      commit('SET_CURRENT_CHOOSE_IDX', data)
    },
    setCurrentChoose({ commit }, data) {
      commit('SET_CURRENT_CHOOSE', data)
    },
    // 获取物业列表
    initProtertyList ({commit}) {
      vm.$get('/property/getAllProperty').then(res => {
        if (res.code === 200) {
          commit('setPropertyList', res.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取小区列表
    initVillageList ({commit}) {
      vm.$get('/village/getAllVillage').then(res => {
        if (res.code === 200) {
          commit('setVillageList', res.data)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
})
