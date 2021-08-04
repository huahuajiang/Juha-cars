<template>
    <div>
        <!--dialog弹窗-->
        <el-dialog title="新增车辆品牌" :visible.sync="dialogVisible" @closed="close" :close-on-click-modal="false">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="车辆品牌">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="品牌型号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="LOGO">
                    <div class="upload-img-wrap">
                        <div class="upload-img"></div>
                        <ul class="img-list">
                        <li></li>
                        </ul>
                    </div>
                </el-form-item>
                <el-form-item label="禁启用">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="禁用"></el-radio>
                        <el-radio label="启用"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger">确定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name:"",
    components:{},
    props:{
        flagVisible:{
            type:Boolean,
            defaullt:false
        }
    },
    data(){
        return{
            dialogVisible:false,
            form: {
                parking_name: "",
                area: "",
                type: "",
                name:""
            },
        }
    },
    methods:{
        close(){
            this.$emit("update:flagVisible",false);
        }
    },
    watch:{
        flagVisible:{
            handler(newValue,oldValue){
                this.dialogVisible=newValue;
            }
        }
    }
}
</script>