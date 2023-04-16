//封装二叉搜索树

function BinarySearchTree() {
    //节点
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    //属性
    this.root = null;
    //方法
    //插入方法:对外给用户调用的方法
    BinarySearchTree.prototype.insert = function (key) {
        //1.根据Key创建节点
        const newNode = new Node(key);
        //2.看是否是根节点
        if (this.root == null) {
            this.root = newNode;
        } else {
            //表示有根节点
            this.insertNode(this.root, newNode);
        }
    }
    //递归插入节点
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            //新节点的key比要比较的节点的key小  向左走

            //如果左子节点为空
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            //向右查找
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

}
