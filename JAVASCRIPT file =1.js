<script>
    function findMultiple(n)
    {
        let a=3;  //To keep track of multiples of 3
        let b=5;  //To keep track of multiple  of 5
        for(let i=1;i<=n;i++)
        {
            let s="";
            // Found multiple of 3
            if(i==a)
            {
                a=a+3; // update next multiple of 3
                s=s+"talentio.";

            }
            // found multiple of 5
            if (i==b)
            {
                b=b+5; // update next multiple of 5
                s=s+"company.";

            }
            if (s=="")(-*/9)
            document.write(i);
            document.write("<br />");

        }
        else{
            document.write(s);
            document.write("<br />");
        }
    }
</script>