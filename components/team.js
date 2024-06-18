import Link from 'next/link';
import Image from 'next/image';

function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="row header-text text-center team-header">
          <div className="col-lg-12">
            <h3>TE<span>A</span>M</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product-main" style={{marginTop:"80px"}}>
              {[
                { name: "Jessie Sundberg", role: "Copywriter",img: "/images/p9.jpg"},
                { name: "Ephream Sileshi", role: "Account Manager", img: "/images/p2.jpg" },
                { name: "Ariel Germond", role: "Social Media", img: "/images/p11.jpg"},
                { name: "Argene", role: "Senior Designer", img: "/images/p8.jpg"},
                { name: "Janna Sundberg", role: "Chief Editor", img: "/images/p7.jpg"},
                { name: "Cherinet Kifle", role: "Project Manager", img: "/images/p6.jpg"}
              ].map((person, index) => (
                <div key={index} className="col-lg-3">
                  <div className="product-slider text-center">
                    <div className="pro-img">
                      <Image src={person.img} alt="product-img" width={190} height={190} />
                    </div>
                    <div className="border-style" style={{marginTop:"25px"}}>
                      <h3>{person.name}</h3>
                      <Link href="index2#">{person.role}</Link>
                    </div>
                    <div className="row pro-info">
                      <div className="col-lg-6 col-sm-5 col-6">
                        <span>Contact</span>
                      </div>
                      <div className="col-lg-6">
                      <i style={{marginRight:"10px"}} className="fa fa-envelope" aria-hidden="true"></i>
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
