import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-start">{price}</p>
        <div className="card-actions flex justify-between items-center">
          <div>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <div>
            <Link to="buynow">
              <AiOutlineArrowRight className="text-orange-600 text-2xl font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
