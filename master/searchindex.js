Search.setIndex({docnames:["index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst"],objects:{"torch_xla.core":{xla_model:[0,0,0,"-"]},"torch_xla.core.xla_model":{add_step_closure:[0,1,1,""],all_gather:[0,1,1,""],all_reduce:[0,1,1,""],all_to_all:[0,1,1,""],collective_permute:[0,1,1,""],do_on_ordinals:[0,1,1,""],get_local_ordinal:[0,1,1,""],get_ordinal:[0,1,1,""],get_rng_state:[0,1,1,""],get_xla_supported_devices:[0,1,1,""],is_master_ordinal:[0,1,1,""],mesh_reduce:[0,1,1,""],optimizer_step:[0,1,1,""],rendezvous:[0,1,1,""],save:[0,1,1,""],set_rng_state:[0,1,1,""],wait_device_ops:[0,1,1,""],xla_device:[0,1,1,""],xla_device_hw:[0,1,1,""],xrt_world_size:[0,1,1,""]},"torch_xla.distributed":{parallel_loader:[0,0,0,"-"],xla_multiprocessing:[0,0,0,"-"]},"torch_xla.distributed.parallel_loader":{ParallelLoader:[0,2,1,""]},"torch_xla.distributed.parallel_loader.ParallelLoader":{per_device_loader:[0,3,1,""]},"torch_xla.distributed.xla_multiprocessing":{MpModelWrapper:[0,2,1,""],MpSerialExecutor:[0,2,1,""],spawn:[0,1,1,""]},"torch_xla.distributed.xla_multiprocessing.MpModelWrapper":{to:[0,3,1,""]},"torch_xla.distributed.xla_multiprocessing.MpSerialExecutor":{run:[0,3,1,""]},"torch_xla.utils":{gcsfs:[0,0,0,"-"],tf_record_reader:[0,0,0,"-"],utils:[0,0,0,"-"]},"torch_xla.utils.gcsfs":{generic_open:[0,1,1,""],generic_read:[0,1,1,""],generic_write:[0,1,1,""],list:[0,1,1,""],open:[0,1,1,""],read:[0,1,1,""],remove:[0,1,1,""],rmtree:[0,1,1,""],stat:[0,1,1,""],write:[0,1,1,""]},"torch_xla.utils.tf_record_reader":{TfRecordReader:[0,2,1,""]},"torch_xla.utils.utils":{DataWrapper:[0,2,1,""],SampleGenerator:[0,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"boolean":0,"byte":0,"case":0,"class":0,"default":0,"float":0,"function":0,"import":0,"int":0,"new":0,"return":0,"switch":0,"throw":0,"true":0,"while":0,Adding:0,But:0,For:0,GCS:0,One:0,The:0,There:0,Using:0,__main__:0,__name__:0,_mp_fn:0,abov:0,acceler:0,access:0,acquir:0,across:0,act:0,activ:0,actual:0,add:0,add_step_closur:0,added:0,addit:0,adjust:0,advantag:0,advis:0,after:0,all:0,all_gath:0,all_reduc:0,all_to_al:0,allow:0,alltoal:0,along:0,alreadi:0,alwai:0,among:0,ani:0,anoth:0,appear:0,appli:0,arg:0,argument:0,async:0,automat:0,avail:0,avoid:0,back:0,background:0,backward:0,barrier:0,base:0,batch:0,batchdim:0,been:0,befor:0,behavior:0,being:0,better:0,between:0,bf16:0,blob:0,block:0,bool:0,both:0,bucket:0,bucket_nam:0,buffer:0,buffer_s:0,build:0,call:0,callabl:0,caller:0,can:0,capac:0,captur:0,care:0,caus:0,chang:0,charact:0,check:0,client:0,closur:0,cloud:0,code:0,collective_permut:0,collectivepermut:0,combin:0,come:0,complet:0,compress:0,comput:0,concat:0,concat_dimens:0,consol:0,construct:0,contain:0,content:0,contigu:0,control:0,convers:0,convert:0,copi:0,core:0,count:0,coupl:0,creation:0,cuda:0,current:0,daemon:0,data:0,dataload:0,dataparallel:0,dataset:0,datatyp:0,datawrapp:0,decod:0,def:0,defer:0,defin:0,definit:0,defval:0,delimit:0,depend:0,deposit:0,describ:0,destin:0,develop:0,device_prefetch_s:0,devkind:0,dict:0,dictionari:0,differ:0,dim:0,dimens:0,directli:0,disk:0,do_on_ordin:0,document:0,doubl:0,download:0,dure:0,each:0,eagerli:0,easi:0,either:0,empti:0,enabl:0,encod:0,end:0,ensur:0,environ:0,error:0,etc:0,evalut:0,even:0,event:0,everi:0,exampl:0,exchang:0,execut:0,executor:0,exist:0,explicitli:0,expos:0,fact:0,fail:0,fals:0,familiar:0,fashion:0,fetch:0,few:0,file:0,file_or_path:0,first:0,fixed_batch_s:0,flag:0,floattensor:0,folder:0,follow:0,fork:0,found:0,full:0,fuse:0,futur:0,gather:0,gcsblob:0,gcsf:0,gener:0,generic_open:0,generic_read:0,generic_writ:0,get:0,get_local_ordin:0,get_ordin:0,get_rng_stat:0,get_xla_supported_devic:0,given:0,global:0,global_mast:0,googl:0,gpu:0,graph:0,group:0,gzip:0,hand:0,handl:0,happen:0,hardwar:0,has:0,have:0,henc:0,here:0,highlight:0,hold:0,host:0,how:0,http:0,immedi:0,implement:0,includ:0,index:0,indic:0,inform:0,initi:0,inplac:0,input:0,insert:0,insid:0,inspect:0,instanc:0,instead:0,integ:0,interfac:0,intermediari:0,intern:0,interpret:0,invis:0,is_master_ordin:0,issu:0,iter:0,its:0,itself:0,join:0,just:0,kei:0,kind:0,l_in:0,l_out:0,label:0,lambda:0,launch:0,len:0,let:0,like:0,line:0,linear:0,list:0,live:0,load_dataset:0,loader:0,loader_prefetch_s:0,local:0,locat:0,longer:0,look:0,loop:0,loss:0,loss_fn:0,lot:0,lower:0,mai:0,make:0,mani:0,map:0,master:0,master_onli:0,match:0,materi:0,matrix:0,max:0,max_devic:0,maximum:0,maybe_download_and_load:0,mean:0,mesh:0,mesh_reduc:0,method:0,might:0,minim:0,minu:0,miss:0,mnist:0,mode:0,modul:0,moment:0,momentum:0,more:0,mpmodelwrapp:0,mpserialexecutor:0,multi:0,multidevic:0,multipli:0,multpl:0,must:0,mynetwork:0,name:0,necessari:0,need:0,nest:0,network:0,neural:0,next:0,nllloss:0,none:0,note:0,nproc:0,num_host:0,number:0,object:0,onc:0,one:0,ones:0,onli:0,onto:0,opaqu:0,open:0,oper:0,operation_semant:0,ops:0,optim:0,optimizer_arg:0,optimizer_step:0,option:0,order:0,ordin:0,org:0,origin:0,other:0,otherwis:0,out:0,output:0,output_path:0,output_str:0,overrid:0,packag:0,page:0,pair:0,para_load:0,parallel_load:0,parallelload:0,paramet:0,parent:0,part:0,particip:0,pass:0,path:0,pattern:0,payload:0,per:0,per_device_load:0,perform:0,place:0,point:0,posit:0,possibl:0,post:0,prefix:0,preserv:0,previou:0,previous:0,primit:0,print:0,process:0,provid:0,put:0,python:0,queu:0,queue:0,ran:0,randn:0,random:0,rang:0,reach:0,real:0,receiv:0,recommend:0,record:0,recreat:0,rede:0,reduc:0,reduce_and:0,reduce_fn:0,reduce_min:0,reduce_mul:0,reduce_or:0,reduce_sum:0,reduce_typ:0,reduct:0,regardless:0,regular:0,relationship:0,remain:0,remov:0,rendezv:0,replic:0,replica:0,replidca:0,repo:0,report:0,repres:0,represent:0,request:0,requir:0,resid:0,result:0,retriev:0,rmtree:0,rng:0,same:0,sampl:0,sample_count:0,samplegener:0,scale:0,scope:0,second:0,section:0,see:0,seed:0,send:0,sender:0,sent:0,separ:0,sequenti:0,serial:0,serial_exec:0,set:0,set_rng_stat:0,sgd:0,should:0,show:0,similar:0,sinc:0,size:0,snippet:0,soon:0,sourc:0,source_replica_id:0,spawn:0,specif:0,specifi:0,split:0,split_count:0,split_dimens:0,spwan:0,stack:0,start:0,start_method:0,stat:0,state:0,state_dict:0,step:0,stop:0,storag:0,store:0,str:0,string:0,structur:0,support:0,synchron:0,synthet:0,system:0,tag:0,take:0,taken:0,target:0,target_replica_id:0,tensorboard:0,tensorflow:0,text:0,tf_record_read:0,tfexampl:0,tfrecord:0,tfrecordread:0,thei:0,them:0,thi:0,though:0,thread:0,three:0,throttl:0,time:0,tmp:0,togeth:0,torch:0,torch_xla:0,tpu:0,train:0,train_load:0,tranform:0,transfer:0,transform:0,tupl:0,two:0,type:0,typic:0,unavail:0,under:0,uniqu:0,unlik:0,until:0,updat:0,upload:0,upon:0,usag:0,use:0,used:0,user:0,uses:0,using:0,usual:0,valu:0,variabl:0,view:0,wai:0,wait:0,wait_device_op:0,weight:0,were:0,what:0,when:0,where:0,whether:0,which:0,whole:0,whose:0,within:0,work:0,worker:0,wrap:0,wrapped_model:0,write:0,written:0,wrt:0,www:0,xla_devic:0,xla_device_hw:0,xla_multiprocess:0,xla_use_bf16:0,xmp:0,xrt_world_siz:0,you:0,your:0,zero_grad:0,zlib:0},titles:["PyTorch on XLA Devices"],titleterms:{api:0,bfloat16:0,cpu:0,creat:0,deep:0,devic:0,distribut:0,dive:0,from:0,further:0,layout:0,lazi:0,load:0,memori:0,model:0,move:0,multipl:0,multiprocess:0,pytorch:0,read:0,run:0,save:0,singl:0,tensor:0,util:0,xla:0,xla_model:0}})