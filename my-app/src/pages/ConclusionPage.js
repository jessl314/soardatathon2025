import React from 'react';
import './ConclusionPage.css';

function ConclusionPage() {
  return (
    <div className="conclusion-page">
      <section className="content-section">
        <h1>Conclusion</h1>
        
        <div className="conclusion-container">
          <div className="text-section">
            <h2>Our Findings</h2>
            <p>
              In synthesizing the relationships between median household income and community well-being indicators like violence and depression diagnosis within LA County, our analysis reveals a nuanced yet compelling narrative. The data suggests that while economic conditions, shown by median income, exhibits a notable influence on violence in LA County, its impact on diagnosed depression is more subtle. The moderately strong negative correlation between income and crime hints that increased financial stability in a community can contribute to a reduction in violence, though a significant portion of this issue can be explained by other socioeconomic and environmental factor.
              On the other hand, the relationship between income and diagnosed depression demonstrates a weaker correlation. It is likely a positive one because those with greater incomes have more access to resources, and thus are more likely to have reported diagnoses. This underscores the multifaceted nature of mental health. These limitations in our data analysis paint a stark picture of potential health disparities—disparities we have tried to combat by providing accessible resources on our websites.
            </p>
            <h2>Implications</h2>
            <p>
            The implications of these findings emphasize a critical need for a united approach to community development and public health. While efforts to uplift economic well-being may have a positive effect on reducing serious crime, addressing the depression is also needed. People must gain access to resources to help with these issues. Both are long-lasting problems that will likely not be solved overnight; the solution needs to be a prepared, meticulous efforts.
            This has to include not just economic support, but also the crucial provision of equitable mental health resources, particularly for underserved communities where the burden of undiagnosed and untreated depression is disproportionately high. It is from this very imperative – to bridge the gap in access and provide vital support – that our platform emerges, aspiring to be a resource for those navigating the intersection of financial hardship and poor mental health within Los Angeles County.

            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConclusionPage; 