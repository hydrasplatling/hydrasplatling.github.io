// Slidetoggle
$(".accordion-head").on("click", function () {
    $(this).next().slideToggle();
    $classname.toggleClass('close');
});

// Icon slidetoggle
$(window).load(function() {
    $(".kit-title").click(function() {
      $header = $(this);
      $content = $header.next();
      $content.slideToggle(500, function() {
        $header.toggleClass('close');
      });
    });
  });

// Tooltips - Sub weapons
tippy('.curling-bomb', {
    content: "Curling Bomb is a bomb which slides forward, leaving an ink trail before detonating.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.splat-bomb', {
    content: "Splat Bomb is a bomb which detonates a second after landing on a surface.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.burst-bomb', {
    content: "Burst Bomb is a bomb which detonates on contact with a surface or an enemy player.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.fizzy-bomb', {
    content: "Fizzy Bomb is a bomb which travels further the more it is shaken. It explodes up to three times in succession, leaving a trail of ink.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.suction-bomb', {
    content: "Suction Bomb is a bomb which attaches to a surface, including walls and ceilings. It detonates after 2 seconds.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.autobomb', {
    content: "Autobomb is a bomb which will automatically search for nearby enemies and detonate when close.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.ink-mine', {
    content: "Ink Mine is a bomb which you can deploy, so that when an enemy steps onto it or enemy ink hits it, it will detonate. This deals some damage, as well as revealing their location. Two Ink Mines can be placed at once.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.torpedo', {
    content: "Torpedo is a bomb which can be thrown in the air to lock onto an enemy, following them and detonating on impact. You can shoot a Torpedo down from mid-air.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.splash-wall', {
    content: "Splash Wall is a sub weapon which acts as a barrier. Enemies cannot shoot through it, while teammates can. Enemies can shoot at it to destroy it faster.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.angle-shooter', {
    content: "Angle Shooter is a sub weapon. It shoots a line which will deal a small amount of damage to enemies, as well as display their location. It bounces off walls.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.sprinkler', {
    content: "Sprinkler is a sub weapon. It turfs a small area around it, effectiveness deprecating over time before it is eventually destroyed.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.point-sensor', {
    content: "Point Sensor is a sub weapon. Deploying it will create an AOE where, if an enemy player walks into it, will mark their location so they are visible through walls and when swimming.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.toxic-mist', {
    content: "Toxic Mist is a sub weapon. Deploying it will create an AOE which will slow down and drain the ink of any enemy inside it.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.squid-beakon', {
    content: "A Squid Beakon is a sub weapon. Placing one down will allow teammates to Super Jump to it. Three Squid Beakons can be placed at once.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  // Tooltips - Special weapons

  tippy('.ultra-stamp', {
    content: "Ultra Stamp is a special weapon. It's a large hammer which the player can wield to stamp the ground, splatting any enemies hit by it instantly. It can also be thrown and will detonate on contact, similar to a Burst Bomb.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.big-bubbler', {
    content: "Big Bubbler is a special weapon. It acts as a large barrier. Enemies cannot shoot into it, however they can walk inside of it to splat whoever is inside. Additionally, Big Bubbler can be Super Jumped to, like a Squid Beakon.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.crab-tank', {
    content: "Crab Tank is a special weapon. It's a crab-shaped tank, which can shoot ink rapidly and launch explosive projectiles. It can roll into a ball, in which the player will be protected but it cannot shoot. Enemies can shoot at Crab Tank to destroy it.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.reefslider', {
    content: "Reefslider is a special weapon. It summons a pool toy which travels forward rapidly, and can be stopped to detonate at any point in its linear path",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.trizooka', {
    content: "Trizooka is a special weapon. It's a large weapon resembling a rocket launcher, and shoots three powerful ink projectiles.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.killer-wail', {
    content: "Killer Wail 5.1 is a special weapon. It summons six speakers which can track and follow 3 enemies through walls with damage-dealing lasers.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.tacticooler', {
    content: "Tacticooler is a special weapon. It summons a drink cooler with 4 drinks in it, providing the user and their teammates with mobility buffs. If a user is splatted with the buffs active, they will respawn in a single second with their full special gauge retained.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.ink-vac', {
    content: "Ink Vac is a special weapon. It's a vacuum which sucks up enemy ink over a period of time, and will then launch a projectile which explodes after landing. The strength of the projectile depends on how much ink was sucked up.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.booyah-bomb', {
    content: "Booyah Bomb is a special weapon. The user will rise into the air to charge up a large ball of ink which can be thrown. Booyah Bomb will be charged much faster when the user and teammates use the 'Booyah!' signal.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.zipcaster', {
    content: "Zipcaster is a special weapon. Zipcaster allows the user to stretch their limbs to reach and stick to usually inaccessible locations. The main weapon is able to be used, however usage will shorten the duration of the special.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  tippy('.tenta-missiles', {
    content: "Tenta Missiles is a special weapon. Tenta Missiles allows the user to 'lock on' to enemy players, sending ink missiles towards them. During the duration of this special, teammates will be able to see which enemies have been targeted.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });
  
  tippy('.wave-breaker', {
    content: "Wave Breaker is a special weapon. Wave Breaker is a device which will periodically send out 'waves' which will damage and locate enemy players. However, the waves can be jumped over. Wave Breaker can be destroyed by enemy players.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });
  
  tippy('.triple-inkstrike', {
    content: "Triple Inkstrike is a special weapon. The user will throw three beacons which stick to surfaces and summon a tornado of ink.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  
  tippy('.inkjet', {
    content: "Inkjet is a special weapon. The user will deploy a jetpack, allowing them to shoot ink projectiles whilst mid-air. Inkjet users can be shot down from the air.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });

  
  tippy('.ink-storm', {
    content: "Ink Storm is a special weapon. Ink Storm summons a raincloud which slowly travels over the stage, raining ink onto it.",
    animation: 'shift-away',
    theme: 'subspec-description',
    maxWidth: 200,
  });
