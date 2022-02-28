import React from 'react'

const Donate = () => {
    const organizations = [
        {
          name: 'Water4',
          url:'https://give.water4.org/give/186969/#!/donation/checkout',
        },
        {
          name: 'Our Last Straw',
          url:'https://www.ourlaststraw.org/donate',
        },
        {
          name:'Ocean Conservancy',
          url: 'https://donate.oceanconservancy.org/page/92465/donate/1'
        },
        {
          name: 'Oceana',
          url: 'https://act.oceana.org/page/95375/donate/1?ea.tracking.id=homepage&utm_campaign=general&utm_source=header&utm_medium=website&op=DONATE&_ga=2.256539016.249554360.1646015579-196140682.1645800703'
        }
    ]
  return (
    <footer id="how_you_can_help">
    <div className="organizations">
      {organizations.map((org, idx) => (
        <div className="org_list" key={idx}>
          <a style={{ textDecoration: 'none', color: '#13a89e', fontWeight: 'bold' }} href={org.url} target="_blank" rel="noopener noreferrer">{org.name}</a>
        </div>
      ))}
    </div>
</footer>
  )
}

export default Donate