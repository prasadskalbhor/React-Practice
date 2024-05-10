import React, { useEffect, useState } from "react";

const PosTracking = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener("scroll", () => {
      // const position = window.scrollY;
      setScroll(window.scrollY);
      // console.log(position);
    });
  }, []);
  return (
    <>
      <h1
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "red",
          width: 500,
        }}
      >
        pos: {scroll}
      </h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        obcaecati molestiae id neque dicta minus impedit, asperiores
        voluptatibus. Consequuntur illum, ducimus obcaecati atque alias eos
        rerum iure, magnam beatae nemo eius quae est odio voluptatibus, deleniti
        sunt omnis? Omnis sed molestiae laudantium nihil minima voluptatibus!
        Ipsum hic incidunt omnis error laboriosam rem eligendi nostrum quis
        autem! Illo odio laborum autem magnam quis ratione fugit modi saepe?
        Voluptatem repellendus eum soluta iusto in reprehenderit accusantium,
        eius nisi consectetur perspiciatis, quaerat cumque, saepe est similique
        magnam amet minus. Minima quo doloribus numquam quae illo at dolorem
        pariatur asperiores porro nobis? Illum velit molestiae temporibus itaque
        voluptatibus, excepturi, eligendi corrupti asperiores adipisci et quo
        hic quod nesciunt, pariatur quam! Repellendus vero aperiam aut, minus
        nulla fuga. Distinctio inventore optio assumenda ad atque error
        necessitatibus est dolorum sint molestiae officiis corporis libero cum
        incidunt culpa obcaecati quidem, delectus voluptatum fugiat dicta
        cumque. Quos sapiente iure unde, soluta, pariatur eius atque incidunt
        excepturi numquam, illum velit accusamus. Odit fugit porro, eos nesciunt
        doloribus a incidunt, optio totam reprehenderit doloremque, aut qui ea
        odio minima? Voluptate, quae culpa eveniet soluta sunt ipsam iusto
        nihil! Ipsa ducimus animi quos. Esse tempore quasi mollitia vel,
        provident unde quas maxime dolorum ullam illo at error alias nisi
        repellat laboriosam, ipsum vitae, autem facere repellendus. Cum eos
        natus, quas, amet voluptas sapiente porro magnam atque nulla laborum
        esse aliquid non explicabo fugit at reiciendis! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Dolorem necessitatibus, nesciunt,
        iusto impedit, veniam quis animi quidem repudiandae laborum enim facilis
        optio. Eius, dolores! Corrupti voluptatum maiores rem maxime at deserunt
        esse facere eveniet ipsam, eos, animi iure? Reprehenderit, vitae quaerat
        facilis sunt quidem quae corporis. Mollitia cupiditate deserunt sint.
        Nisi tempora id ea ex nulla quo omnis, vel rerum aliquid modi
        praesentium. Praesentium tempora ratione at nam recusandae alias?
        Voluptas repellat unde blanditiis nostrum doloribus quaerat debitis
        repellendus et rerum dolorum, numquam ipsum vitae. Quos commodi dolor
        fugit aperiam sit natus, totam sint. Molestias iure aliquam sapiente,
        optio, officia asperiores nihil, sequi harum cupiditate quidem qui cum.
        Repellat, eveniet. Mollitia.
      </h2>
    </>
  );
};

export default PosTracking;
