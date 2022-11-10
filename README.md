# Data-structure
学习数据结构
  ###
  (https://www.bilibili.com/video/BV1x7411L7Q7/?p=87&spm_id_from=pageDriver&vd_source=26b5f24919aeb671ba1dbff34904c160) 87 -155
    数据结构就是数据结构
      栈结构 后进先出(stack)  函数调用栈结构 A调用B，B调用C，C调用D  D函数先执行完成 出栈，然后c执行完成，然后B执行完成，然后A执行完成  栈中不在存放结构  
  ### 指针
  学习了指针后发现指针太奇妙了，a和b指向一个地址，在给a添加属性的时候，把a的地址换成最新属性的地址这样 b也有了这个属性地址 
      a = b ;
      a.next = 0x_123;
      b也有了这个属性
      while(a.next){
        a = a.next
        //这样a指向了新的地址
      }
  ###
    学习目标 每天一个commit() 
    const map = new Map(['1', '正确'], ['2', '错误'], ['3', '其他']);
    const getMap = map.get(key);

https://github.com/jpuri/react-draft-wysiwyg 富文本编辑器
//antd 笔记
场景： 在一个Form里面放了Switch组件当我请求配置页面的时候，需要请求接口 获取已有配置数据。但是后端返回的是1，2，3 我需要把后端返回的数据改为Word1， Word2，Word3
在useEffect里面请求配置接口，setState(res.data)给form 
const params = {
  ...res.data,
  enable: res.data.enable==1
}
setState(params);这样把请求回来的数据保存到State中
这时候Switch里面是的enable是(true or false) 
打开Modal的时候展示已经设置的Form values 
当我在提交的时候 可以拿到已经输入的Form.values 但是此时我Switch的选中时True or false
我需要把Switch转换为1，2，3
const params = {
  ...values,
  enable: enable? 1 : 2
}
然后提交数据
fetValues(params) 就可以了
