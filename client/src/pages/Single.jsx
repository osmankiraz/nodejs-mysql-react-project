import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/300/300" alt=""></img>
        <div className="user">
          <img src="https://picsum.photos/200/300" alt=""></img>
          <div className="info">
            <span>John</span>
            <p>Posted two day ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          quaerat
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          veniam debitis ipsam perspiciatis magnam vel voluptatem, neque ex aut
          accusantium, impedit, autem ea officiis. Molestias explicabo
          voluptatibus necessitatibus, laudantium voluptas placeat iure
          inventore optio aliquam earum dolorum veritatis ipsa? Similique,
          sequi. Vitae qui laborum ea eum nobis aperiam ullam quasi expedita
          voluptatem tempora, corrupti nemo quod quis. Consequatur, perferendis
          eos itaque neque dolor doloremque est tempora! Nihil, sunt laudantium
          incidunt est mollitia vel ipsum soluta aliquid explicabo? Saepe
          aspernatur, reprehenderit ea facilis quae rem laboriosam quasi qui ad
          aperiam quis ipsam doloremque harum beatae neque suscipit quas dolorem
          quibusdam dolores commodi facere? Iste laudantium nostrum quam
          accusantium, minima ipsam rerum at distinctio porro ea expedita,
          necessitatibus ipsum delectus numquam natus illum ut cupiditate
          aspernatur facere tempora maiores cum esse non! Aliquam, modi dolore
          quibusdam assumenda sit tenetur voluptas officia deserunt!
          Reprehenderit, maxime facilis necessitatibus quidem sed fugiat
          nesciunt voluptatem, iste libero aspernatur sequi veritatis eum quasi
          dignissimos iure! Pariatur eius vero consequatur delectus sapiente
          earum quis repellat amet saepe doloremque autem animi non dignissimos
          ab laborum, culpa eaque nam, doloribus alias porro fugiat dolores in!
          Labore fugiat debitis, et, at atque hic repudiandae eveniet magnam,
          enim explicabo error quaerat dignissimos.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          veniam debitis ipsam perspiciatis magnam vel voluptatem, neque ex aut
          accusantium, impedit, autem ea officiis. Molestias explicabo
          voluptatibus necessitatibus, laudantium voluptas placeat iure
          inventore optio aliquam earum dolorum veritatis ipsa? Similique,
          sequi. Vitae qui laborum ea eum nobis aperiam ullam quasi expedita
          voluptatem tempora, corrupti nemo quod quis. Consequatur, perferendis
          eos itaque neque dolor doloremque est tempora! Nihil, sunt laudantium
          incidunt est mollitia vel ipsum soluta aliquid explicabo? Saepe
          aspernatur, reprehenderit ea facilis quae rem laboriosam quasi qui ad
          aperiam quis ipsam doloremque harum beatae neque suscipit quas dolorem
          quibusdam dolores commodi facere? Iste laudantium nostrum quam
          accusantium, minima ipsam rerum at distinctio porro ea expedita,
          necessitatibus ipsum delectus numquam natus illum ut cupiditate
          aspernatur facere tempora maiores cum esse non! Aliquam, modi dolore
          quibusdam assumenda sit tenetur voluptas officia deserunt!
          Reprehenderit, maxime facilis necessitatibus quidem sed fugiat
          nesciunt voluptatem, iste libero aspernatur sequi veritatis eum quasi
          dignissimos iure! Pariatur eius vero consequatur delectus sapiente
          earum quis repellat amet saepe doloremque autem animi non dignissimos
          ab laborum, culpa eaque nam, doloribus alias porro fugiat dolores in!
          Labore fugiat debitis, et, at atque hic repudiandae eveniet magnam,
          enim explicabo error quaerat dignissimos.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
