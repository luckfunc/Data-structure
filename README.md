# Data-structure
学习数据结构
  ###
  (https://www.bilibili.com/video/BV1x7411L7Q7?p=77&spm_id_from=pageDriver&vd_source=26b5f24919aeb671ba1dbff34904c160) 77 -155
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
    学习目标 每天一个commit(30号小目标 73 -83 )
