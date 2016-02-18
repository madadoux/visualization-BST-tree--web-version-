var v = document.getElementById("Clog");
v.innerHTML += "JAVASCRIPT CONNECTED ! <br\>";
//stack
function Snode(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}
function stack() {

    this.base = null;
    this.tail = null;
    this.size = 0;


    this.push = function (val) {

        var tmp = new Snode(val);
        if (this.base === null) {
            this.base = tmp;
            this.tail = tmp;
            this.size++;
            return;
        }

        this.tail.next = tmp;
        tmp.prev = this.tail;

        this.tail = this.tail.next;
        this.size++;

    };

    this.pop = function () {
        var tmp0 = this.tail.prev;
        var tmp = this.tail.val;

        tmp0.next = null;

        this.tail = tmp0;
        this.size--;
        return tmp;

    };

    this.CLEAR = function () {
        var tmp0 = null;
        var tmp = this.base;
        while (tmp !== null) {
            tmp0 = tmp;
            tmp = tmp.next;
            tmp0 = null;
        }
        this.base = null;
        this.tail = null;
        this.size = 0;
    };

    this.print = function () {
        var tmp = this.base;
        while (tmp !== null) {
            v.innerHTML += tmp.val + " ";
            tmp = tmp.next;
        }
    };

    this.isEmpty = function () {
        return (this.size == 0);
    };

}
//bst
function node(val) {
    this.left = null;
    this.right = null;
    this.val = val;
	this.x =0;
	this.y=0;
	this.scalex=0;
}
function BST()
{
    this.root = null;
    this.size = 0;
    this.Copy;
     
    this.find = function (val) {
        var tmp2 = this.root;         
        while (tmp2 !== null) {
            if (val > tmp2.val)
                tmp2 = tmp2.right;
            else if (val < tmp2.val)
                tmp2 = tmp2.left;
            else
                return "found";
        }
        return "not found";
    };
	
    this.insert = function (val) {
        var tmp = new node(val); // ????? ??????? ?????
        var tmp2 = this.root; // ?????? ?? ???? ??? ??? 
        var tmp3 = null;
        if (this.root === null) //?? ???? ?????? ????? 
        {
	      	tmp.x=1000;
		    tmp.y=50;
		    tmp.scalex=950;
            this.root = tmp;
            DrawCircle(tmp.x,tmp.y);
            DrawText(val ,tmp.x,tmp.y);
        }
        else
        {
            while (tmp2 !== null)
            {
			tmp3=tmp2;
			if (val > tmp2.val)
			    tmp2 = tmp2.right;
			else if (val < tmp2.val)
			    tmp2 = tmp2.left;
			else
			    return v.innerHTML += "the Element already here ! <br\> ";
            }
            //?????? ? ?????? ??????
            if (val > tmp3.val)
			{
			tmp.scalex=(tmp3.scalex /2);
			tmp.x=tmp3.x+tmp.scalex;
			tmp.y=tmp3.y+70;
            tmp3.right = tmp;
		    DrawLine(tmp3.x,tmp3.y+25,tmp.x,tmp.y);
            DrawCircle(tmp.x, tmp.y);
            DrawText(val ,tmp.x,tmp.y);
			}
            else
			{
			tmp.scalex=(tmp3.scalex/2);
			tmp.x=tmp3.x-tmp.scalex;
			tmp.y=tmp3.y+70;
                tmp3.left = tmp;
			DrawLine(tmp3.x,tmp3.y+25,tmp.x,tmp.y);
			DrawCircle(tmp.x,tmp.y);
            DrawText(val ,tmp.x,tmp.y);
			}
        }
        this.size++;
        v.innerHTML+=val +" is Inserted"+"<br\>";
return 1;
    };

    this.removeNode = function (val) {
        var found = false,
            parent = null,
            tmp = this.root,
           // childCount,
           // replacement,
          isRightchild = false;
        //only proceed if the node was found
        while (!found && tmp)
        {
            //if the value is less than the tmp node's, go left
            if (val < tmp.val)
            {
                parent = tmp;
                tmp = tmp.left;
                isRightchild = false;
                //if the value is greater than the current node's, go right
            }
            else if (val > tmp.val)
            {
                parent = tmp;
                tmp = tmp.right;
                isRightchild = true;
                //values are equal, found it!
            }
            else
            {
                found = true;
            }
        }
        if(!found)
        {
            v.innerHTML += " No Element  ! <br\> ";
            return;
        }
        if (found) {
            if ((tmp.left === null) && (tmp.right === null)) //leaf
            {
                if (parent === null)//delete root
				{
				var cur=this.root;
				{
				    ctx.clearRect(cur.x - 26, cur.y - 26, 53, 53);
                    this.root = null;
				}
			}
                else
                {
				var cur;
                    //default
                    if (isRightchild)
					{
					cur=parent.right;
					//ClearCircule(cur.x,cur,y,25);
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(parent.x,parent.y+25,cur.x,cur.y);
					ClearLine(parent.x,parent.y+25,cur.x,cur.y);
                        parent.right = null;
					}
                    else
                    {
                        cur = parent.left;
					    ctx.clearRect(cur.x-26,cur.y-26,53,53);
						ClearLine(parent.x,parent.y+25,cur.x,cur.y);
						ClearLine(parent.x,parent.y+25,cur.x,cur.y);
						//clearline(parent.x,parent.y,cur.x,cur.y);
                        parent.left = null;
					}
                }

                this.size--;
                v.innerHTML += val + "is Deleted  <br\>";
                return 1;
            }

            else if (tmp.left === null)
            {
                //case root
                if (parent === null) //delete root
				{				
					DrawText(this.root.val,this.root.x,this.root.y);
					var cur=tmp.right;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.right.x=this.root.x;
				    tmp.right.y=this.root.y;
                    this.root = tmp.right;
				}
                else
                {
                    //default
                    if (isRightchild)
					{
					ctx.clearRect(tmp.x-26,tmp.y-26,53,53);
					DrawCircle(tmp.x,tmp.y);
					DrawText(tmp.right.val,tmp.x,tmp.y);
					var cur=tmp.right;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.right.x=parent.right.x;
					tmp.right.y=parent.right.y;
                        parent.right = tmp.right;
					}
                    else
					{
					ctx.clearRect(tmp.x-26,tmp.y-26,53,53);
					DrawCircle(tmp.x,tmp.y);
					DrawText(tmp.right.val,tmp.x,tmp.y);
					var cur=tmp.right;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.right.x=parent.left.x;
					tmp.right.y=parent.left.y;
                        parent.left = tmp.right;
					}
                }

                this.size--;
                v.innerHTML += val + "is Deleted  <br\>";
                return 1;
            }
			
            else if (tmp.right === null) 
            {
                if (parent === null) //delete root
				{
				    DrawText(this.root.val,this.root.x,this.root.y);
					var cur=tmp.left;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.left.x=this.root.x;
				    tmp.left.y=this.root.y;
                    this.root = tmp.left;
					}
                else
                {
                    //default
                    if (isRightchild)
					{
					ctx.clearRect(tmp.x-26,tmp.y-26,53,53);
					DrawCircle(tmp.x,tmp.y);
					DrawText(tmp.left.val,tmp.x,tmp.y);
					var cur=tmp.left;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.left.x=parent.right.x;
					tmp.left.y=parent.right.y;
                        parent.right = tmp.left;
					}
                    else
					{
					ctx.clearRect(tmp.x-26,tmp.y-26,53,53);
					DrawCircle(tmp.x,tmp.y);
					DrawText(tmp.left.val,tmp.x,tmp.y);
					var cur=tmp.left;
					ctx.clearRect(cur.x-26,cur.y-26,53,53);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					ClearLine(tmp.x,tmp.y+25,cur.x,cur.y);
					tmp.left.x=parent.left.x;
					tmp.left.y=parent.left.y;
                        parent.left = tmp.left;
					}
                }
                this.size--;
                v.innerHTML += val + "is Deleted  <br\>";
                return 1;
            }
			
            else // if((tmp->Left!=NULL)&&(tmp->right!=NULL))
            {
                var maxleft = this.maxVal(tmp.left).val;
                this.Copy = maxleft;
                this.removeNode(maxleft);
				ctx.clearRect(tmp.x-26,tmp.y-26,53,53);
				DrawCircle(tmp.x,tmp.y);
                DrawText(maxleft,tmp.x,tmp.y);
                tmp.val = this.Copy;
            }
            v.innerHTML += val + "is Deleted  <br\>";
            return 1; }
    }
	
    this.inorder = function (root) {
        if (this.size == 0)
            return v.innerHTML += " No elements !! ";
        if (root === null)
            return;

        this.inorder(root.left);
        v.innerHTML += root.val + ",";
        this.inorder(root.right);

    };
    this.preorder = function (root) {
        if (this.size == 0)
            return v.innerHTML += " No elements !! ";
        if (root === null)
            return;
        v.innerHTML += root.val + ",";
        this.inorder(root.left);
   
        this.inorder(root.right);

    }
    this.postorder = function (root) {
        if (this.size == 0)
            return v.innerHTML += " No elements !! " ;
        if (root === null)
            return;
    
        this.inorder(root.left);

        this.inorder(root.right);
    v.innerHTML += root.val + ",";
    }
    this.minVal = function (where) {

        var min;
        tmp = where;
        while (tmp !== null) {
            if (tmp.left === null) {
                min = tmp.val;
                return tmp;
            }
            else
                tmp = tmp.left;
        }
    };
    this.maxVal = function (where) {

        var max;
        tmp = where;
        while (tmp !== null) {
            if (tmp.right === null) {
                max = tmp.val;
                return tmp;
            }
            else
                tmp = tmp.right;
        }
    };
    this.CLEAR = function () {
        this.clear(this.root);
        this.root = null;
        this.size = 0;
    }
    this.clear = function (root) {
        if (root !== null) {

            this.clear(root.left);
            this.clear(root.right);
            root = null;
            this.size--;
        }
    };

}
//button behavior
function getinsertkey() {
    var key = document.getElementById('inputValue').value;
    b.insert(key);
}
function getsearchkey() {
    var key = document.getElementById('inputSearch').value;
    v.innerHTML += "The key " + key + " was " + b.find(key) + "<br\>";
}


function getdeletekey() {
    var key = document.getElementById('deleteKey').value;
    b.removeNode(key);
   // v.innerHTML += "The " + key + " has been deleted from the tree" + "<br\>";
}
function insertRan(L1, L2) {
    var rand = Math.floor((Math.random() * L2) + L1);
    b.insert(rand);
}


//graphical func
function ZoomIn() {
 /*   Sx += .5;
    Sy += .5;
    ctx.scale(1 + Sx, 1 + Sy);  */
}
function ZoomOut() {
  /*  Sx -= .5;
    Sy -= .5;
    ctx.scale(1 - Sx, 1 + Sy);*/
}
function CanvasClear() {
   // ctx.save();
    //ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
    //ctx.restore();
}
function DrawCircle(x, y) {
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
}
function DrawLine( x1,y1,x2,y2 ) {
    ctx.moveTo(x1, y1);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineTo(x2, y2);
	ctx.strokeStyle ="white"
    ctx.stroke();
}
function DrawText(txt,x,y) {
    ctx.font = "15px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.fillText(txt, x, y+5);
}
function ClearCircule(x, y, radius)
{
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI, false);
    context.clip();
    context.clearRect(x - radius - 1, y - radius - 1,radius * 2 + 2, radius * 2 + 2);
};
function ClearLine( x1,y1,x2,y2 ) {
    ctx.moveTo(x1, y1);
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineTo(x2, y2);
	ctx.strokeStyle ="black"
    ctx.stroke();
}
var barC = 0;
function a() {
    var v = document.getElementById("anim");
    if (barC <= 10) {
        v.innerHTML += "►";
        barC++;
    }
    else {
        barC = 0;
        v.innerHTML = " ";
    }
    
}
var xxx = setInterval(a, 50);

//main
var b = new BST();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

b.insert(25);
b.insert(15);
b.insert(50);
b.insert(10);
b.insert(22);
b.insert(35);
b.insert(70);
b.insert(4);
b.insert(12);
b.insert(18);
b.insert(24);
b.insert(31);
b.insert(44);
b.insert(66);
b.insert(90);
b.insert(3);
b.insert(5);
b.insert(1);
b.insert(3.5);
b.insert(4.5);
b.insert(5.5);
b.insert(11 );
b.insert(13 );
b.insert(10.5 );
b.insert(11.5 );

b.insert(12.5 );
b.insert(13.5 );
b.insert(17 );
b.insert(20 );
b.insert(16 );
b.insert(17.5 );
b.insert(21 );
b.insert(19.5 );
b.insert(23 );
b.insert(26 );
b.insert(24.5 );
b.insert(23.5 );
b.insert(22.5 );
b.insert(24.75 );
b.insert(24.25 );
b.insert(33 );
b.insert(32 );
b.insert(34 );
b.insert(25.5 );
b.insert(27 );
b.insert(42 );
b.insert(45 );
b.insert(41 );
b.insert(43 );
b.insert(44.5 );
b.insert(46 );
b.insert(65);
b.insert(68); 
b.insert(64); 
b.insert(65.5 );
b.insert(67);
b.insert(69 );
b.insert(85 );
b.insert(95 );
b.insert(84 );
b.insert(86 );
b.insert(94 );
b.insert(96); 