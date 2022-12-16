import math
speed =int  (input("speed ="))
ttbs=150/speed
traffic=[10,10,10]
def f(speed,traffic):
    res=ttbs
    for i in range (len (traffic)):
        if math.floor(res/traffic[i])%2==0:
            res+=ttbs

        else:
            x=1-(res/traffic[i]-math.floor(res/traffic[i]))
            res+=x*traffic[i]
            res+=ttbs
           
            
    print (res)
    f(speed,traffic)
