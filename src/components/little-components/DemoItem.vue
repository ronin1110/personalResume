<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-23 15:53:07
 * @LastEditors: yaolin
--><template>
  <div>
    <a :href="href">
      <div class="demo-item" >
        <div class="back-0" ></div>
          <el-tooltip effect="dark" :content="toolTip" placement="top">
            <div class="image">
              <el-image
                style="width: 100%; height: 100%"
                :src="imageSrc"
                fit="fill"></el-image>
            </div> 
          </el-tooltip>
        <div class="back-1" ></div>
      </div>    
    </a>
  </div>
</template>

<script>
export default {
  props: {
    toolTip: String,
    href:String,
    imageSrc:String,

  },
  components: {

  },
  data(){
    return {
        
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.demo-item{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0);
  transition: all .5s;
  &:hover{
    opacity: .9;
  }
}
.back-0{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60%;
  width: 100%;
  background-image: linear-gradient(60deg,#29323c,#485563);
  z-index: 1;
}
.back-1{
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30%;
  width: 100%;
  background-image: linear-gradient(-60deg,#29323c,#485563);
  opacity: .8;
  z-index: 3;
}
.image{
  position: relative;
  // margin: 20px;
  width: 80%;
  height: 80%;
  bottom: 0px;
  // left: 50%;
  z-index: 2;
}
</style>
