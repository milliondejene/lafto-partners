
import Link from 'next/link';


function Team() {
  return (
    <section id="team">
    <div class="container">
        <div class="row header-text text-center team-header">
            <div class="col-lg-12">
                <h3>TE<span>A</span>M</h3>
            </div>
        </div>
        <div class="row team-pa">
            <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                <img src="images/t1.jpg" alt="team-member" class="img-fluid"/>
                <h3>Ephrem</h3>
                <p>CEO Founder</p>
                <a href="index2#">Profile</a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                <img src="images/t2.jpg" alt="team-member" class="img-fluid"/>
                <h3>Argene</h3>
                <p>Senior Designer</p>
                <a href="index2#">Profile</a>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 m-auto team-item text-center">
                <img src="images/t3.jpg" alt="team-member" class="img-fluid"/>
                <h3>Jess</h3>
                <p>Content Writer</p>
                <a href="index2#">Profile</a>
            </div>
        </div>
    </div>
</section>
  );
}

export default Team;
