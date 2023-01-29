//  merge two array 

 var merge = function(nums1 ,m , nums2 , n  ){
    let l = m+n-1;
    let r = m-1;
    let q = n-1;

    while(r>=0 && q>=0){
        if(nums1[q] > nums2[q]){
            nums1[l]= nums1[r]
            r--
        }else{
            nums1[l] = nums2[q]
            q--
        }
        l--
    }
    while(r>=0){
        nums1[l] = nums1[n]
        r--
        l--
    }
    while(q>=0){
        nums1[l]= nums2[n]
        q--
        l--
    }
    return nums1+nums2
 };

 console.log(merge([2,3,5,6 , 8 ,9],4, [0 ,11 ,12] ))