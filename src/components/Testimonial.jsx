export const Testimonial = ({img, testimonial, name, position}) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
        <img className="w-[72px] rounded-full" src={img} alt="photo" />
        <p className="my-8 font-Barlow text-very-dark-grayish-blue px-4 max-w-[400px]">{testimonial}</p>
        <h3 className="font-Fraunces text-[18px] text-very-dark-desaturated-blue">{name}</h3>
        <p className=" text-grayish-blue font-Barlow text-[14px]">{position}</p>
    </div>
  )
}
