<?php
declare(strict_types=1);

// Freetestapi SDK base feature

class FreetestapiBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreetestapiContext $ctx, array $options): void {}
    public function PostConstruct(FreetestapiContext $ctx): void {}
    public function PostConstructEntity(FreetestapiContext $ctx): void {}
    public function SetData(FreetestapiContext $ctx): void {}
    public function GetData(FreetestapiContext $ctx): void {}
    public function GetMatch(FreetestapiContext $ctx): void {}
    public function SetMatch(FreetestapiContext $ctx): void {}
    public function PrePoint(FreetestapiContext $ctx): void {}
    public function PreSpec(FreetestapiContext $ctx): void {}
    public function PreRequest(FreetestapiContext $ctx): void {}
    public function PreResponse(FreetestapiContext $ctx): void {}
    public function PreResult(FreetestapiContext $ctx): void {}
    public function PreDone(FreetestapiContext $ctx): void {}
    public function PreUnexpected(FreetestapiContext $ctx): void {}
}
